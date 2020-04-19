import React from "react";
import PropTypes from "prop-types";

import {
  Header,
  Navigation,
  ToggleButtonWrapper,
  Spacer,
  NavigationItems,
  List,
  Item,
  MenuLink,
} from "./styles";
import HamburgerButton from "../HamburgerButton";

const Navbar = ({ menuLinks, sidebarToggleHandler }) => (
  <Header>
    <Navigation>
      <ToggleButtonWrapper>
        <HamburgerButton clickHandler={sidebarToggleHandler} />
      </ToggleButtonWrapper>
      <Spacer />
      <NavigationItems>
        <List>
          {menuLinks.map((currentLink) => {
            const { to, label } = currentLink;

            return (
              <Item key={label}>
                <MenuLink active={0} to={to}>
                  {label}
                </MenuLink>
              </Item>
            );
          })}
        </List>
      </NavigationItems>
    </Navigation>
  </Header>
);

Navbar.propTypes = {
  menuLinks: PropTypes.array.isRequired,
  sidebarToggleHandler: PropTypes.func.isRequired,
};

export default Navbar;
