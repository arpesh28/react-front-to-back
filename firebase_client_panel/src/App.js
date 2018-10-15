import React, { Component } from "react";
import "./App.css";

import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AddClient from "./components/clients/AddClient";
import DetailsClient from "./components/clients/DetailsClient";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/:id" component={DetailsClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
