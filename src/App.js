import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import MenuBar from "./components/MenuBar";
import Routes from "./Routes";

library.add(fab);

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
