import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Login from "./Pages/Login/Login";
// import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import RequestPage from "./Pages/RequestPage/RequestPage";

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/requestpage" component={RequestPage} />
      </Switch>
    </Router>
  );
}

export default Routes;

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;
