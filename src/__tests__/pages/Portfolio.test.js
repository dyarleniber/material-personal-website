import React from "react";
import { shallow } from "enzyme";

import Portfolio from "../../pages/Portfolio";

it("renders without crashing", () => {
  const wrapper = shallow(<Portfolio />);
  expect(wrapper).toMatchSnapshot();
});
