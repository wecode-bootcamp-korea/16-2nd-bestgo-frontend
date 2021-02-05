import React, { useState } from "react";
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
import Request from "./Pages/Request/Request";
import MainNavbarLayout from "./Components/Navbar/MainNavbarLayout";
import Navbar from "./Components/Navbar/Navbar";
import CustomerNavbar from "./Components/Navbar/CustomerNavbar";
import ExpertNavbar from "./Components/Navbar/ExpertNavbar";

function Routes(props) {
  const token = window.localStorage.getItem("token") && true;
  const master_token = window.localStorage.getItem("master_token") && true;
  return (
    <Router>
      <MainNavbarLayout>
        {!token && <Navbar />}
        {token && <CustomerNavbar />}
        {master_token && <ExpertNavbar />}
      </MainNavbarLayout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/find-password" component={FindPassword} />
        <Route exact path="/find-password/send" component={Send} />
        <Route exact path="/reset/:token" component={Reset} />
        {/* <Route exact path="/:category" component={Main} /> */}
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/requestpage" component={RequestPage} />
        <Route exact path="/requestpage/detail" component={RequestDetail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/estimate" component={Estimate} />
        <Route exact path="/search/detail" component={SearchDetail} />
        <Route exact path="/request/:serviceId" component={Request} />
      </Switch>
    </Router>
  );
}

export default Routes;
