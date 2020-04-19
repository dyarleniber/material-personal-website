import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Content,
  Wrapper,
  Head,
  Spacer,
  Close,
  List,
  Item,
  MenuLink,
} from "./styles";

const Sidebar = ({ menuLinks, toggle, toggleHandler }) => {
  return (
    <Container toggle={toggle}>
      <Content>
        <Wrapper>
          <Head>
            <Spacer />
            <Close onClick={toggleHandler}>x</Close>
          </Head>
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
        </Wrapper>
      </Content>
    </Container>
  );
};

Sidebar.propTypes = {
  menuLinks: PropTypes.array.isRequired,
  toggle: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
};

export default Sidebar;
