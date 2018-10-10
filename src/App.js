import React, { Component } from "react";
import "./assets/CSS/App.scss";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bb907da8713b17b52b76b36")
      .then(response => response.json())
      .then(res => this.setState({ projects: res }));
  }

  render() {
    return <Home projects={this.state.projects} />}
}

export default App;
