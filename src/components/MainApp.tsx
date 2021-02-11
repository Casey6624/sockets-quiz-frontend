import React, { useRef } from "react";
import styled from "styled-components";
import { COLOURS } from "../common/styles";
import { Link } from "react-router-dom";
interface Props {
  roomId: string;
  waiting?: boolean;
}

const MainAppContainer = styled.div`
  h1 {
    font-size: 2rem;
    color: ${COLOURS.GREEN};
  }
  margin-top: 10px;

  width: 100%;
  max-height: 50vh;
  min-height: 40vh;
  border-radius: 10px;
  align-self: center;

  div {
    height: 100%;
    text-align: center;
  }
`;

const RoomId = styled.input`
  padding: 15px;
  border: none;
  color: ${COLOURS.GREEN};
  font-weight: bold;
  letter-spacing: 5px;
  background: none;
  outline: none;
  text-align: center;
  border-bottom: 2px solid ${COLOURS.RED};
  &::selection {
    background: ${COLOURS.RED};
    color: ${COLOURS.PINK};
  }
`;

const Welcome = styled.div`
  background: ${COLOURS.PINK};
  text-align: left;
  padding: 35px;
  width: 50%;
  border-radius: 0 15px 15px 0;
`;

const LeaveRoom = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 15px;
  border-radius: 15px;
  width: fit-content;
  img {
    margin-right: 5px;
    max-width: 24px;
  }

  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }
`;

const MainApp: React.FC<Props> = ({ roomId, waiting = true }) => {
  function handleFocus() {
    if (roomIdRef !== null && roomIdRef.current !== null) {
      // @ts-ignore
      roomIdRef.current.select();
    }
  }
  const roomIdRef = useRef(null);
  return (
    <MainAppContainer>
      <Welcome>
        <h1>Welcome to room</h1>
        <RoomId
          ref={roomIdRef}
          type="text"
          value={roomId}
          onMouseOver={() => handleFocus()}
        />
        <p>Use this code to invite your enemies</p>
        <LeaveRoom onClick={() => (window.location.href = "/")}>
          <img src="/assets/logout.svg" />
          <h5>Leave Room</h5>
        </LeaveRoom>
      </Welcome>
    </MainAppContainer>
  );
};

export default MainApp;
