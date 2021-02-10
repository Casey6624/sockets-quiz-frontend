import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// views
import Room from "./views/Room";

function App() {
  const [email, setEmail] = useState("");
  const [go, setGo] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!go ? (
            <div>
              <h1>Get Started!</h1>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
              <button onClick={() => setGo(true)}>Lets Go!</button>
            </div>
          ) : (
            <Redirect to="/t35t-r00m" />
          )}
        </Route>
        <Route exact path="/:roomId">
          {go && email.trim() !== "" && <Room email={email} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
