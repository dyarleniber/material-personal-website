import React from "react";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../config/icons";
import ListItemLink from "../../components/ListItemLink";

it("renders without crashing", () => {
  let props;
  let wrapper;

  props = {
    to: "/",
    primary: "Home",
    icon: <FontAwesomeIcon icon={"home"} />,
    handleClick: jest.fn(),
  };
  wrapper = shallow(<ListItemLink {...props} />);
  expect(wrapper).toMatchSnapshot();

  props = {
    to: "/",
    primary: "Home",
  };
  wrapper = shallow(<ListItemLink {...props} />);
  expect(wrapper).toMatchSnapshot();
});
