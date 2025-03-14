/// <reference types="vite/client" />
import type { Socket as SocketType } from "socket.io-client";
import { getSocket } from './socketService';

// Determine if we're in production mode
const isProduction = import.meta.env.VITE_ENV === 'production' || !import.meta.env.VITE_ENV;

// Use environment variables with fallbacks
// In production with Railway, we can use relative URLs as the backend serves the frontend
const API_URL = isProduction 
  ? '' // Empty string means use relative URLs (same origin)
  : (import.meta.env.VITE_API_URL || 'http://localhost:5000');

// For debugging
console.log('API Service - Environment:', isProduction ? 'production' : 'development');
console.log('API Service - Using API URL:', API_URL);

// Define the MinutesData interface for type checking
export interface MinutesData {
  title: string;
  duration: string;
  summary: string;
  action_points: string[];
  transcription: string;
  speakers: string[];
  pdf_path?: string;
  job_id?: string;
}

// Define interfaces for job data
export interface JobResponse {
  status: string;
  job_id: string;
  minutes?: MinutesData;
  error?: string;
  timestamp?: string;
  pdf_path?: string;
}

/**
 * Upload a file to the backend
 */
export async function uploadFile(file: File): Promise<JobResponse> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const endpoint = `${API_URL}/upload`;
    console.log(`Uploading to: ${endpoint}`);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed with status: ${response.status}, message: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

/**
 * Get job status from the backend
 */
export async function getJobStatus(jobId: string): Promise<JobResponse> {
  try {
    const response = await fetch(`${API_URL}/job_status/${jobId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to get job status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching job status:', error);
    // Return a default error response so consuming code can handle it gracefully.
    return {
      status: "error",
      job_id: jobId,
      error: "Backend server not available. Ensure it is running."
    };
  }
}

/**
 * Helper to retrieve job data from localStorage
 */
export function getLastJobData(): { jobId: string | null, jobData: any | null } {
  try {
    const jobId = localStorage.getItem('lastJobId');
    const jobDataStr = localStorage.getItem('lastJobData');
    
    let jobData = null;
    if (jobDataStr) {
      jobData = JSON.parse(jobDataStr);
    }
    
    return { jobId, jobData };
  } catch (e) {
    console.error('Error retrieving job data from localStorage:', e);
    return { jobId: null, jobData: null };
  }
}

/**
 * Join a specific job for real-time updates with improved error handling
 */
export function joinJobRoom(jobId: string, onUpdate?: (data: any) => void, onComplete?: (data: any) => void, onError?: (error: string) => void) {
  if (!jobId) {
    console.error("Cannot join job room: No job ID provided");
    return () => {};
  }

  const s = getSocket();
  if (!s) {
    console.error("Cannot join job room: Socket connection not established");
    // Try to get status via REST API instead
    if (onComplete) {
      getJobStatus(jobId).then(data => {
        if (data.status === 'completed' && data.minutes) {
          console.log(`[apiService] Got completed job data via REST API: ${jobId}`);
          onComplete(data);
        } else if (data.status === 'error' && onError) {
          onError(data.error || 'Unknown error');
        }
      }).catch(err => {
        console.error("Failed to get job status via REST:", err);
        if (onError) onError("Failed to connect to server");
      });
    }
    return () => {};
  }
  
  console.log(`[apiService] Joining job room: ${jobId}`);
  
  // Clean up any existing listeners to prevent duplicates
  s.off('processing_update');
  s.off('processing_complete');
  s.off('processing_error');
  s.off('rejoin_response');
  
  // Set up new listeners
  if (onUpdate) {
    s.on('processing_update', (data: any) => { 
      console.log(`[apiService] Received processing_update for job: ${jobId}`, data);
      if (data && data.job_id === jobId) onUpdate(data); 
    });
  }
  
  if (onComplete) {
    s.on('processing_complete', (data: any) => { 
      console.log(`[apiService] Received processing_complete for job: ${jobId}`, data);
      if (data && data.job_id === jobId) {
        console.log(`[apiService] Processing complete for job: ${jobId}`, data);
        
        // Store in localStorage for better recovery
        try {
          localStorage.setItem('lastJobId', jobId);
          localStorage.setItem('lastJobData', JSON.stringify(data));
        } catch (e) {
          console.error('Error storing job data in localStorage:', e);
        }
        
        onComplete(data); 
      }
    });
    
    // Also handle rejoin_response which might contain completed job data
    s.on('rejoin_response', (data: any) => {
      console.log(`[apiService] Received rejoin_response for job: ${jobId}`, data);
      if (data && data.job_id === jobId && data.status === 'completed') {
        onComplete(data);
      }
    });
  }
  
  if (onError) {
    s.on('processing_error', (data: any) => {
      console.error(`[apiService] Received processing_error for job: ${jobId}`, data);
      if (data && data.job_id === jobId) onError(data.error || 'Unknown error');
    });
  }
  
  // Join the room
  console.log(`[apiService] Emitting rejoin_job for: ${jobId}`);
  s.emit('rejoin_job', { job_id: jobId });
  
  // Also get job status via REST as a fallback
  getJobStatus(jobId).then(data => {
    console.log(`[apiService] REST API job status for ${jobId}:`, data);
    if (data.status === 'completed' && data.minutes && onComplete) {
      console.log(`[apiService] Job is already completed according to REST API: ${jobId}`);
      onComplete(data);
    } else if (data.status === 'error' && onError) {
      onError(data.error || 'Unknown error');
    }
  }).catch(err => {
    console.error("Failed to get job status via REST:", err);
  });
  
  // Return cleanup function
  return () => {
    // Get fresh socket reference in case it was reconnected
    const currentSocket = getSocket();
    if (currentSocket) {
      console.log(`[apiService] Leaving job room: ${jobId}`);
      currentSocket.off('processing_update');
      currentSocket.off('processing_complete');
      currentSocket.off('processing_error');
      currentSocket.off('rejoin_response');
    }
  };
}
