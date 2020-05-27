import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import MenuBar from "./components/MenuBar";
import Routes from "./Routes";

import defaultprofilepic from "./assets/images/defaultprofilepic.jfif";

library.add(fab);

const data = {
  name: "Dyarlen Iber",
  description:
    "Full-Stack Developer | JavaScript | Node.js | MongoDB | React | PHP | Laravel | MySQL",
  email: "dyarlen1@gmail.com",
  profilePicture: defaultprofilepic,
  socialMedias: [
    {
      name: "github",
    },
    {
      name: "linkedin",
    },
    {
      name: "instagram",
    },
    {
      name: "dev",
    },
  ],
};

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <MenuBar>
        <Routes {...data} />
      </MenuBar>
    </Router>
  );
};

export default App;
