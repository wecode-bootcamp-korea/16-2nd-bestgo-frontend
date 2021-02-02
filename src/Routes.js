import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
// import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import RequestPage from "./Pages/RequestPage/RequestPage";
import Footer from "./Components/Footer/Footer";
import RequestDetail from "./Pages/RequestDetail/RequestDetail";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:category" component={Main} />
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/requestpage" component={RequestPage} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/requestpage/detail" component={RequestDetail} />
      </Switch>
    </Router>
  );
}

export default Routes;
