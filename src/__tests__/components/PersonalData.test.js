import React from "react";
import { shallow } from "enzyme";

import * as data from "../../config/dataApi";
import "../../config/icons";
import PersonalData from "../../components/PersonalData";

const originalPersonalData = data.personalData;

beforeAll(() => {
  delete data.personalData;
  data.personalData = {
    greeting: "greeting",
    name: "name",
    description: "description",
    email: "email",
    profilePicture: "profilePicture",
    socialMedias: [
      {
        name: "socialMediaName",
        url: "socialMediaUrl",
      },
    ],
  };
});

afterAll(() => {
  data.personalData = originalPersonalData;
});

describe("PersonalData component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<PersonalData />);
    expect(wrapper).toMatchSnapshot();
  });
});
