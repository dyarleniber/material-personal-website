import React from "react";
import { shallow } from "enzyme";

import Routes from "../Routes";

it("renders without crashing", () => {
  const wrapper = shallow(<Routes />);
  expect(wrapper).toMatchSnapshot();
});
