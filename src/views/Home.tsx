import React from "react";
import styled from "styled-components";
import { COLOURS } from "../common/styles";

interface Props {
  setNickname: Function;
  setGo: Function;
  nickname: string;
}

const Container = styled.div`
  min-height: 100%;
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  border: solid 15px ${COLOURS.RED};
  background: ${COLOURS.RED};
`;

const Overlay = styled.div`
  border: 15px solid ${COLOURS.CREAM};
  background: ${COLOURS.CREAM};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Login = styled.div`
  h1 {
    font-size: 4rem;
    color: ${COLOURS.GREEN};
  }
  margin-top: 10px;
  background: ${COLOURS.PINK};
  width: 100%;
  max-height: 50vh;
  min-height: 40vh;
  border-radius: 10px;
  display: grid;
  place-items: center;
  align-self: center;

  div {
    height: 100%;
    text-align: center;
  }
`;

const StyledBtnInput = styled.button`
  background: ${COLOURS.RED};
  color: white;
  padding: 15px;
  border-radius: 0 15px 15px 0;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  height: 100%;
  width: 100%;
  background-image: url("/assets/retro-tv.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 15px;
`;

const RoundedLeftInput = styled.input`
  padding: 15px;
  border-radius: 15px 0 0 15px;
  outline: none;
  border: none;
`;

const RoundedFullInput = styled.input`
  padding: 15px;
  border-radius: 15px;
  outline: none;
  border: none;
  margin: 0 auto;
`;

const StyledDivider = styled.hr`
  border-top: 2px solid ${COLOURS.RED};
  width: 100%;
  margin: 10px 0;
`;

const LoginForm = styled.form``;

const SideBar = styled.div``;

export default function Home({ setNickname, setGo, nickname }: Props) {
  // TODO: add validation
  function handleSubmit(e: any) {
    e.preventDefault();
    if (nickname.trim() === "") return;

    setGo(true);
  }
  return (
    <Container>
      <Overlay>
        <MainBody>
          <Login>
            <LoginForm onSubmit={(e) => handleSubmit(e)}>
              <h1>Get Started!</h1>

              <RoundedLeftInput
                placeholder="Enter a nickname"
                type="text"
                onChange={(e) => setNickname(e.target.value)}
              />
              <StyledBtnInput type="submit">Lets Go!</StyledBtnInput>

              <h4 style={{ fontSize: "1.25rem" }}>Got an invite code?</h4>
              <StyledDivider />
              <RoundedFullInput
                placeholder="Invite Code"
                type="text"
                value="t35t-r00m"
              />
            </LoginForm>
          </Login>

          <SideBar />
        </MainBody>
      </Overlay>
    </Container>
  );
}
