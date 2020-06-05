import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function Routes() {
  return (
    <Switch>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
