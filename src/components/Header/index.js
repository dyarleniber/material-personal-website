import React, { Component } from "react";

import { Container } from "./styles";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Backdrop from "../Backdrop";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuLinks: [
        {
          to: "/",
          label: "Home",
        },
      ],
      sidebarToggle: false,
    };
  }

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { sidebarToggle: !prevState.sidebarToggle };
    });
  };

  render() {
    const { menuLinks, sidebarToggle } = this.state;

    return (
      <Container>
        <Navbar
          menuLinks={menuLinks}
          sidebarToggleHandler={this.sidebarToggleHandler}
        />
        <Sidebar
          menuLinks={menuLinks}
          toggle={sidebarToggle}
          toggleHandler={this.sidebarToggleHandler}
        />
        {sidebarToggle && (
          <Backdrop sidebarToggleHandler={this.sidebarToggleHandler} />
        )}
      </Container>
    );
  }
}

export default Header;
