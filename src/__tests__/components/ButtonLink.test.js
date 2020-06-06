import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import ButtonLink from "../../components/ButtonLink";

it("renders without crashing", () => {
  const props = {
    variant: "outlined",
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
