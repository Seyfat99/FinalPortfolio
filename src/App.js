import React, { Component } from "react";
import "./assets/CSS/App.scss";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bd3d1a8adf9f5652a662289/1")
      .then(response => response.json())
      .then(res =>
        this.setState({ projects: res }, () => {
          console.log(this.state.projects);
        })
      );
  }

  render() {
    return <Home projects={this.state.projects} />;
  }
}

export default App;
