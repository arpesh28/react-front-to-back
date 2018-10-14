import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
