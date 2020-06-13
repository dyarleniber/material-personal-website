import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import "../../config/icons";
import ListItemLink from "../../components/ListItemLink";

describe("ListItemLink component", () => {
  it("should render without crashing", () => {
    let props;
    let wrapper;

    props = {
      to: "/",
      primary: "Home",
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
});
