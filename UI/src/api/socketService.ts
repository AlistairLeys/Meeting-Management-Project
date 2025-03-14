import io from "socket.io-client";
import type { Socket } from "socket.io-client";

// Determine if we're in production mode
const isProduction = import.meta.env.VITE_ENV === 'production' || !import.meta.env.VITE_ENV;

// Set socket URL based on environment
const SOCKET_URL = isProduction
  ? window.location.origin // Use current origin for WebSockets in production
  : (import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');

// For debugging
console.log('Socket Service - Environment:', isProduction ? 'production' : 'development');
console.log('Socket Service - Using Socket URL:', SOCKET_URL);

// Socket.IO connection singleton
let socket: Socket | null = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;

/**
 * Initialize and get a singleton Socket.IO connection
 */
export function getSocket(): Socket | null {
  if (!socket) {
    try {
      console.log('Creating new Socket.IO connection to:', SOCKET_URL);
      socket = io(SOCKET_URL, {
        path: '/socket.io',
        transports: ['websocket', 'polling'], // Try websocket first, fallback to polling
        reconnection: true,
        reconnectionAttempts: MAX_RECONNECT_ATTEMPTS,
        reconnectionDelay: 1000,
        timeout: 20000,
      });
      
      // Set up default listeners for logging/debugging
      socket.on('connect', () => {
        console.log('Socket connected successfully with ID:', socket?.id);
        reconnectAttempts = 0; // Reset counter on successful connection
      });
      
      socket.on('connect_error', (err: any) => {
        console.error('Socket connection error:', err);
        reconnectAttempts++;
        
        if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
          console.error('Max reconnection attempts reached, giving up');
          disconnectSocket();
        }
      });

      socket.on('disconnect', (reason) => {
        console.warn('Socket disconnected:', reason);
        
        // If the server disconnected us, try to reconnect manually
        if (reason === 'io server disconnect') {
          console.log('Attempting to reconnect...');
          socket?.connect();
        }
      });

      // Debug event to test connection is working
      socket.emit('test_connection', { client: 'connected' });
    } catch (error) {
      console.error('Failed to initialize socket:', error);
      return null;
    }
  }
  
  return socket;
}

/**
 * Disconnect and clean up the socket connection
 */
export function disconnectSocket(): void {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log('Socket disconnected and reference cleared');
  }
}

/**
 * Check if socket is connected and healthy
 */
export function isSocketConnected(): boolean {
  return socket !== null && socket.connected;
}

/**
 * Force reconnection if needed
 */
export function forceReconnect(): void {
  if (socket) {
    socket.disconnect();
    socket.connect();
    console.log('Forced socket reconnection');
  } else {
    getSocket();
  }
}
