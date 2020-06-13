import React from "react";
import { shallow } from "enzyme";

import Home from "../../pages/Home";

describe("Home page", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
