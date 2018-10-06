import React, { Component } from "react";
import "./assets/CSS/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

class App extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    fetch("http://api.jsonbin.io/b/5bb7a238a97c597b3c603f61/2")
      .then(response => response.json())
      .then(res => this.setState({ projects: res }));
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Portfolio projects={this.state.projects} />
        <Skills />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
