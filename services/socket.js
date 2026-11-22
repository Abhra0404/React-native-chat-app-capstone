
import { io } from "socket.io-client";

const SOCKET_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://10.7.12.102:9876";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
});

// Connect the socket using the logged-in user's JWT
export function connectSocket(token) {
  socket.auth = {
    token: token,
  };

  socket.connect();
}

// Disconnect this device from Socket.IO
export function disconnectSocket() {
  socket.disconnect();
}

// Connection successful
socket.on("connect", () => {
  console.log("Connected to Chatty Socket.IO server:", socket.id);
});

// Connection closed
socket.on("disconnect", (reason) => {
  console.log("Disconnected from Chatty Socket.IO server:", reason);
});

// Connection error
socket.on("connect_error", (error) => {
  console.log("Socket connection error:", error.message);
});
