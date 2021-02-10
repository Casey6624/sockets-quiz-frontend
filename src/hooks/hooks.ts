import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "NEW_MESSAGE"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4500";

export const useChat = (roomId: string, emailAddress: string) => {
  const [messages, setMessages] = useState<any>([]); // Sent and received messages
  const socketRef = useRef<any>({});

  useEffect(() => {
    if (!emailAddress || !roomId) return;
    // Creates a WebSocket connection
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages([...messages, incomingMessage]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, emailAddress]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody: any) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return [messages, sendMessage];
};
