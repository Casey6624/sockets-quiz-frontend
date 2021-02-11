import React from "react";
import styled from "styled-components";
import { COLOURS } from "../common/styles";

interface Props {
  allMessages: any[];
  userMessage: string;
  setUserMessage: Function;
  handleSendMessage: Function;
}

const ChatContainer = styled.div`
  height: 100%;
  background: ${COLOURS.CREAM};
  border: 5px solid ${COLOURS.RED};
  border-radius: 0 15px 15px 0;
  position: relative;
`;

const SendContainer = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ChatSendBox = styled.input`
  width: 100%;
  padding: 15px;
  border: solid ${COLOURS.PINK};
  border-top-width: 5px;
  outline: none;
  background: white;
`;

const ChatSendBtn = styled.button`
  padding: 15px;
  border: 0;
  outline: none;
  border-radius: 0 0 8px 0;
  background: ${COLOURS.PINK};
  img {
    max-width: 24px;
  }
`;

const Message = styled.h5`
  font-family: "Fjalla One";
  word-break: break-word;
`;

const MessageContainer = styled.div`
  background: white;
  height: 100%;
  padding: 5px;
  border-radius: 0 15px 15px 0;
  flex-direction: column-reverse;
  display: flex;
  overflow-y: scroll;
  align-self: flex-end;
  max-height: 87vh;
`;

const MessagesInnerContainer = styled.div``;

const Chat: React.FC<Props> = ({
  allMessages,
  handleSendMessage,
  setUserMessage,
  userMessage,
}) => {
  return (
    <ChatContainer>
      <MessageContainer>
        <MessagesInnerContainer>
          {allMessages.length > 0 &&
            allMessages.map(
              (msg: { body: string; senderId: string; email: string }) => {
                return (
                  <Message>
                    <strong>{msg.email || ""}</strong> says: {msg.body || ""}
                  </Message>
                );
              }
            )}
        </MessagesInnerContainer>
      </MessageContainer>
      <SendContainer onSubmit={(e) => handleSendMessage(e)}>
        <ChatSendBox
          type="text"
          placeholder="Type an awesome message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <ChatSendBtn type="submit">
          <img src="/assets/send.svg" />
        </ChatSendBtn>
      </SendContainer>
    </ChatContainer>
  );
};

export default Chat;
