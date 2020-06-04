import React from "react";
import { shallow } from "enzyme";

import "../../config/icons";
import PersonalData from "../../components/PersonalData";

it("renders without crashing", () => {
  const wrapper = shallow(<PersonalData />);
  expect(wrapper).toMatchSnapshot();
});
