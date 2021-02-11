import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useChat } from "../hooks/hooks";

interface Props {
  email: string;
}

const RoomContainer = styled.div``;
export default function Room({ email }: Props) {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, sendMessage] = useChat(roomId, email);
  const [userMessage, setUserMessage] = useState("");
  const [allMessages, setAllMessages] = useState<any>([]);

  function handleSendMessage() {
    if (userMessage.trim() === "") return;
    sendMessage(userMessage);
    setUserMessage("");
  }
  // send new messages and retrieve new messages
  useEffect(() => {
    if (!messages || messages.length === 0) return;
    const temp: any = [...allMessages];
    temp.push(messages[messages.length - 1]);
    setAllMessages(temp);
  }, [messages]);

  return (
    <RoomContainer>
      <h1>Welcome to room {roomId}</h1>
      <div>
        {allMessages.length > 0 &&
          allMessages.map(
            (msg: { body: string; senderId: string; email: string }) => {
              return (
                <p>
                  <strong>{msg?.email || ""}</strong> says: {msg?.body || ""}
                </p>
              );
            }
          )}
        <div>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button onClick={() => handleSendMessage()}>Send</button>
        </div>
      </div>
    </RoomContainer>
  );
}
