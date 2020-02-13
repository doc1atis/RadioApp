import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

const MainApp = React.lazy(() => import("./MainApp"));
const Landing = React.lazy(() => import("./components/Landing/Landing"));

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/player" component={MainApp} />
        </Switch>
      </>
    );
  }
}
