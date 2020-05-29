import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "../src/config/icons";
import MenuBar from "./components/MenuBar";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <MenuBar>
        <Routes />
      </MenuBar>
    </Router>
  );
};

export default App;
