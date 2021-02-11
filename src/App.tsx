import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// views
import Room from "./views/Room";
import Home from "./views/Home";

const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [email, setEmail] = useState("");
  const [go, setGo] = useState(false);
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            {!go ? (
              <Home setGo={setGo} setEmail={setEmail} />
            ) : (
              <Redirect to="/t35t-r00m" />
            )}
          </Route>
          <Route exact path="/:roomId">
            {go && email.trim() !== "" && <Room email={email} />}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
