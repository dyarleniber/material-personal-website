import React from "react";
import { shallow } from "enzyme";

import MenuBar from "../../components/MenuBar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

it("renders without crashing", () => {
  const wrapper = shallow(
    <MenuBar>
      <div className="unique" />
    </MenuBar>
  );
  expect(wrapper).toMatchSnapshot();
});
