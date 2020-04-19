import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Backdrop = (props) => <Container onClick={props.sidebarToggleHandler} />;

Backdrop.propTypes = {
  sidebarToggleHandler: PropTypes.func.isRequired,
};

export default Backdrop;
