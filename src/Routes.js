import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/blog">
        <Blog {...props} />
      </Route>
      <Route path="/portfolio">
        <Portfolio {...props} />
      </Route>
      <Route path="/">
        <Home {...props} />
      </Route>
    </Switch>
  );
};

export default Routes;
