import React, { Component } from "react";

import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Yang Ricardo"
          email="yangricardo17@gmail.com"
          phone="+55 (21) 99556-0615"
        />
      </div>
    );
  }
}

export default App;
