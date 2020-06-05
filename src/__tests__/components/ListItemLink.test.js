import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
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
  wrapper = mount(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <ListItemLink {...props} />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();

  props = {
    to: "/",
    primary: "Home",
  };
  wrapper = mount(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <ListItemLink {...props} />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
