import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "../src/config/icons";
import theme from "../src/config/theme";
import MenuBar from "./components/MenuBar";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuBar>
          <Routes />
        </MenuBar>
      </ThemeProvider>
    </Router>
  );
}

export default App;
