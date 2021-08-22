import React from "react";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
