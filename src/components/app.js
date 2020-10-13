import { h } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Stepper from "../routes/stepper";

const App = () => (
  <div id="app">
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
      <Stepper
        path="/stepper"
        contents={[
          {
            title: "First",
            content: "First-content",
          },
          {
            title: "Second",
            content: "Second-content",
          },
          {
            title: "Last",
            content: "Last-content",
          },
        ]}
      />
    </Router>
  </div>
);

export default App;
