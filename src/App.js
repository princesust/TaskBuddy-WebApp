import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import Map from "./pages/map";
import "./index.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
