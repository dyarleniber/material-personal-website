import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import ButtonLink from "../../components/ButtonLink";

describe("ButtonLink component", () => {
  it("should render without crashing", () => {
    const props = {
      to: "/portfolio",
      primary: "See my portfolio",
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <ButtonLink {...props} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
