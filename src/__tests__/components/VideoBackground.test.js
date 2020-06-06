import React from "react";
import { shallow } from "enzyme";

import VideoBackground from "../../components/VideoBackground";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";
import videPoster240 from "../../assets/images/code240.jpg";
import videoSource240 from "../../assets/videos/code240.mp4";

jest.mock("../../hooks/useBackgroundVideo");

it("renders without crashing", () => {
  useBackgroundVideo.mockImplementation(() => {
    return {
      videPoster: videPoster240,
      videoSource: videoSource240,
    };
  });

  const wrapper = shallow(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("video").prop("poster")).toEqual(videPoster240);
  expect(wrapper.find("source").prop("src")).toEqual(videoSource240);
});
