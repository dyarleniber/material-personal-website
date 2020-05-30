import React from "react";
import { shallow } from "enzyme";

import ButtonLink from "../../components/ButtonLink";

it("renders without crashing", () => {
  const props = {
    variant: "outlined",
    to: "/portfolio",
    primary: "See my portfolio",
  };

  const wrapper = shallow(<ButtonLink {...props} />);
  expect(wrapper).toMatchSnapshot();
});
