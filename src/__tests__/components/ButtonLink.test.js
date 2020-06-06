import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import ButtonLink from "../../components/ButtonLink";

it("renders without crashing", () => {
  const props = {
    variant: "outlined",
    to: "/portfolio",
    primary: "See my portfolio",
  };
  const wrapper = shallow(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <ButtonLink {...props} />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
