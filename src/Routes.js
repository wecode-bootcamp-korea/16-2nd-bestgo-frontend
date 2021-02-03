import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import FindPassword from "./Pages/FindPassword/FindPassword";
import Send from "./Pages/FindPassword/Send";
import Reset from "./Pages/FindPassword/Reset";
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";
import RequestPage from "./Pages/RequestPage/RequestPage";
import Footer from "./Components/Footer/Footer";
import RequestDetail from "./Pages/RequestDetail/RequestDetail";
import SearchDetail from "./Pages/SearchDetail/SearchDetail";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
<<<<<<< HEAD
        <Route exact path="/:category" component={Main} />
        <Route exact path="/signup" component={Signup} />
=======
        <Route exact path="/category" component={Main} />
        {/* <Route exact path="/signup" component={Signup} /> */}
>>>>>>> 7beed02 (Add: 고수 프로필 레이아웃 구현)
        <Route exact path="/login" component={Login} />
        <Route exact path="/requestpage" component={RequestPage} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/requestpage/detail" component={RequestDetail} />
<<<<<<< HEAD
        <Route exact path="/find-password" component={FindPassword} />
        <Route exact path="/find-password/send" component={Send} />
        <Route exact path="/reset/:token" component={Reset} />
=======
        <Route exact path="/search/detail" component={SearchDetail} />
>>>>>>> 7beed02 (Add: 고수 프로필 레이아웃 구현)
      </Switch>
    </Router>
  );
}

export default Routes;
