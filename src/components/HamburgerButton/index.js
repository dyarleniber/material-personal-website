import React from "react";
import PropTypes from "prop-types";

import { Button, Line } from "./styles";

const HamburgerButton = (props) => (
  <Button onClick={props.clickHandler}>
    <Line />
    <Line />
    <Line />
  </Button>
);

HamburgerButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default HamburgerButton;
