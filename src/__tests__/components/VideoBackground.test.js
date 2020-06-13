import React from "react";
import { shallow } from "enzyme";

import VideoBackground from "../../components/VideoBackground";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";

jest.mock("../../hooks/useBackgroundVideo");

describe("VideoBackground component", () => {
  it("should render without crashing", () => {
    const videPoster = "videopostertest.jpg";
    const videoSource = "videosourcetest.mp4";

    useBackgroundVideo.mockImplementation(() => {
      return {
        videPoster: videPoster,
        videoSource: videoSource,
      };
    });

    const wrapper = shallow(
      <VideoBackground>
        <div className="unique" />
      </VideoBackground>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("video").prop("poster")).toEqual(videPoster);
    expect(wrapper.find("source").prop("src")).toEqual(videoSource);
  });
});
