// import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import US from "./Components/US";
import BE_StoryEdit from "./Components/BE_StoryEdit";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={US} />
          <Route path="/BE" exact component={BE_StoryEdit} />
        </Switch>
      </Router>
    );
  }
}
