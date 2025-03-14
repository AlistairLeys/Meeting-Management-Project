import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { MinutesData } from '../api/apiService';
import { getSocket } from '../api/socketService';

// Define the context shape
interface MeetingContextType {
  meetingData: MinutesData | null;
  setMeetingData: (data: MinutesData | null) => void;
  activeJobId: string | null;
  setActiveJobId: (id: string | null) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

// Create context with default values
const MeetingContext = createContext<MeetingContextType>({
  meetingData: null,
  setMeetingData: () => {},
  activeJobId: null,
  setActiveJobId: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

// Create provider component
export const MeetingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [meetingData, setMeetingData] = useState<MinutesData | null>(null);
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on initial render
  React.useEffect(() => {
    try {
      const storedJobId = localStorage.getItem('lastJobId');
      const storedJobData = localStorage.getItem('lastJobData');
      
      if (storedJobData && storedJobId) {
        console.log('[MeetingContext] Loading stored job data for job:', storedJobId);
        const parsedData = JSON.parse(storedJobData);
        if (parsedData.minutes) {
          setMeetingData(parsedData.minutes);
          setActiveJobId(storedJobId);
        }
      }
    } catch (e) {
      console.error('Error loading meeting data from localStorage:', e);
    }
  }, []);

  // Save to localStorage whenever data changes
  React.useEffect(() => {
    if (meetingData && activeJobId) {
      try {
        console.log('[MeetingContext] Saving job data to localStorage for job:', activeJobId);
        localStorage.setItem('lastJobData', JSON.stringify({
          job_id: activeJobId,
          minutes: meetingData,
          status: "completed"
        }));
        localStorage.setItem('lastJobId', activeJobId);
      } catch (e) {
        console.error('Error saving meeting data to localStorage:', e);
      }
    }
  }, [meetingData, activeJobId]);

  const connectToSocket = useCallback(() => {
    const s = getSocket();
    if (!s) {
      console.error("Failed to connect to socket");
      return;
    }
    
    console.log('[MeetingContext] Setting up socket event handlers');
    
    // Set up socket event handlers
    s.on('processing_complete', (data) => {
      console.log('[MeetingContext] Received processing_complete event:', data);
      if (data && data.minutes && data.job_id) {
        console.log('[MeetingContext] Updating meeting data from socket event');
        setMeetingData(data.minutes);
        setActiveJobId(data.job_id);
        setLoading(false);
      }
    });
    
    // If we have an active job ID, join that room
    if (activeJobId) {
      console.log('[MeetingContext] Joining job room for active job:', activeJobId);
      s.emit('rejoin_job', { job_id: activeJobId });
    }
    
    return () => {
      console.log('[MeetingContext] Cleaning up socket event handlers');
      const currentSocket = getSocket();
      if (currentSocket) {
        currentSocket.off('processing_complete');
      }
    };
  }, [activeJobId]);

  useEffect(() => {
    const cleanup = connectToSocket();
    return cleanup;
  }, [connectToSocket]);

  return (
    <MeetingContext.Provider value={{
      meetingData,
      setMeetingData,
      activeJobId,
      setActiveJobId,
      loading,
      setLoading,
      error,
      setError
    }}>
      {children}
    </MeetingContext.Provider>
  );
};

// Custom hook for using the context
export const useMeetingContext = () => useContext(MeetingContext);

export default MeetingContext;
