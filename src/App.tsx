import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
