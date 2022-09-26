import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path  = "/login">
            <Login/>
          </Route>
          <Route path="/details">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
