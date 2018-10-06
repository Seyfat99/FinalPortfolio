import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/CSS/App.scss";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bb8cf578713b17b52b7511d/2")
      .then(response => response.json())
      .then(res => this.setState({ projects: res }));
  }
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home projects={this.state.projects} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
