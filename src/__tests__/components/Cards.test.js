import React from "react";
import { shallow } from "enzyme";

import Cards from "../../components/Cards";
import * as types from "../../components/Cards/constants";

it("renders without crashing", () => {
  let props;
  let wrapper;

  props = {
    name: "test 1",
    description: "test 1 description",
    type: types.FRONTEND_TYPE,
    technologies: ["technologie 1"],
    homepage: "homepage",
    github: "github",
  };
  wrapper = shallow(<Cards {...props} />);
  expect(wrapper).toMatchSnapshot();

  props = {
    name: "test 2",
    description: "test 2 description",
    type: types.BACKEND_TYPE,
    technologies: ["technologie 1"],
    homepage: "homepage",
    github: "github",
  };
  wrapper = shallow(<Cards {...props} />);
  expect(wrapper).toMatchSnapshot();

  props = {
    name: "test 3",
    description: "test 3 description",
    type: types.FRONTEND_TYPE,
  };
  wrapper = shallow(<Cards {...props} />);
  expect(wrapper).toMatchSnapshot();
});
