import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import FindPassword from "./Pages/FindPassword/FindPassword";
import Send from "./Pages/FindPassword/Send";
import Reset from "./Pages/FindPassword/Reset";
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import RequestPage from "./Pages/RequestPage/RequestPage";
import RequestDetail from "./Pages/RequestDetail/RequestDetail";
import Search from "./Pages/Search/Search";
import SearchDetail from "./Pages/SearchDetail/SearchDetail";
import Estimate from "./Pages/Estimate/Estimate";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/category" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/find-password" component={FindPassword} />
        <Route exact path="/find-password/send" component={Send} />
        <Route exact path="/reset/:token" component={Reset} />
        <Route exact path="/requestpage" component={RequestPage} />
        <Route exact path="/requestpage/detail" component={RequestDetail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/detail" component={SearchDetail} />
        <Route exact path="/estimate" component={Estimate} />
      </Switch>
    </Router>
  );
}

export default Routes;
