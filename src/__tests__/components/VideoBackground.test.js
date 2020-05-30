import React from "react";
import { shallow } from "enzyme";

import VideoBackground from "../../components/VideoBackground";

it("renders without crashing", () => {
  const wrapper = shallow(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );
  expect(wrapper).toMatchSnapshot();
});
