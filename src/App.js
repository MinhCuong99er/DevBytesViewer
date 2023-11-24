import React from "react";
import "react-select-search/style.css";
// import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import moment from "moment";
import Home from "./view/Home";

const routes = [
  {
    path: "/",
    exact: true,
    Component: () => <Home />,
  },
];

function showRoute(routes) {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={(props) => {
            // api.setHistory(props.history)
            let Screen = route.Component;
            return <Screen />;
          }}
        />
      );
    });
  }
  return <Switch>{result}</Switch>;
}

function App() {
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={moment().valueOf()}
          timeout={500}
        >
          <BrowserRouter>{showRoute(routes)}</BrowserRouter>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
