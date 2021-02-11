import React from "react";
import styled from "styled-components";
import { COLOURS } from "../common/styles";

interface Props {
  setEmail: Function;
  setGo: Function;
}

const Container = styled.div`
  min-height: 100%;
  background: ${COLOURS.RED};
  position: relative;
  display: grid;
  place-items: center;
  height: 100%auto;
`;

const Overlay = styled.div`
  background: ${COLOURS.CREAM};
  height: 98%;
  width: 98%;
  border-radius: 10px;
`;

const Login = styled.div`
  h1 {
    font-size: 4rem;
    color: ${COLOURS.GREEN};
  }
  height: 100%;
  min-height: 60vh;
  background: ${COLOURS.PINK};
  width: 50%;
  border-radius: 10px;
  display: grid;
  place-items: center;

  div {
    height: 100%;
  }

  input {
    padding: 15px;
    border-radius: 10px 0 0 15px;
    outline: none;
    border: none;
  }

  button {
    background: ${COLOURS.RED};
    color: white;
    padding: 15px;
    border-radius: 0 15px 15px 0;
    border: none;
  }
`;
const MainBody = styled.div``;

const SideBar = styled.div``;

export default function Home({ setEmail, setGo }: Props) {
  function handleSubmit() {}
  return (
    <Container>
      <Overlay>
        <MainBody>
          <Login>
            <div>
              <h1>Get Started!</h1>
              <input
                placeholder="john@doe.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={() => setGo(true)}>Lets Go!</button>
            </div>
          </Login>

          <SideBar />
        </MainBody>
      </Overlay>
    </Container>
  );
}
