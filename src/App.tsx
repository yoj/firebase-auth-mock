import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
