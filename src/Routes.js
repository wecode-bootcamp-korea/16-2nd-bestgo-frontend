import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Login from "./Pages/Login/Login";
// import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;
