import React from "react";
import { shallow } from "enzyme";

import Routes from "../Routes";

describe("Routes component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
