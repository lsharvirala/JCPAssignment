import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}/>
     <Route path="user-edit(/:id)" component={UserEdit}/>
     <Route path="*" component={Home}/>

  </Router>
);

// export
export { router };
