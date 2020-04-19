import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <Header />
        <Routes />
      </Theme>
    </Router>
  );
}

export default App;
