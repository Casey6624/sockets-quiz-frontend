import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useChat } from "../hooks/hooks";
import { COLOURS } from "../common/styles";
// components
import PageWrapper from "../components/PageWrapper";
import Chat from "../components/Chat";
import MainApp from "../components/MainApp";
interface Props {
  nickname: string;
}

export default function Room({ nickname }: Props) {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, sendMessage] = useChat(roomId, nickname);
  const [userMessage, setUserMessage] = useState("");
  const [allMessages, setAllMessages] = useState<any>([]);

  function handleSendMessage(e: any) {
    e.preventDefault();
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
    <PageWrapper pageSplit={"1fr 400px"} bgImage="pill.jpg">
      <MainApp roomId={roomId} />
      <Chat
        allMessages={allMessages}
        handleSendMessage={handleSendMessage}
        setUserMessage={setUserMessage}
        userMessage={userMessage}
      />
    </PageWrapper>
  );
}
