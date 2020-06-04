import React from "react";
import { mount } from "enzyme";

import VideoBackground from "../../components/VideoBackground";
import videPoster240 from "../../assets/images/code240.jpg";
import videPoster320 from "../../assets/images/code320.jpg";
import videPoster480 from "../../assets/images/code480.jpg";
import videPoster720 from "../../assets/images/code720.jpg";
import videoSource240 from "../../assets/videos/code240.mp4";
import videoSource320 from "../../assets/videos/code320.mp4";
import videoSource480 from "../../assets/videos/code480.mp4";
import videoSource720 from "../../assets/videos/code720.mp4";

const { innerWidth } = window;

beforeEach(() => {
  delete window.innerWidth;
});

afterAll(() => {
  window.innerWidth = innerWidth;
});

it("renders without crashing - 1281px width", () => {
  window.innerWidth = 1281;

  const wrapper = mount(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("video").prop("poster")).toEqual(videPoster720);
  expect(wrapper.find("source").prop("src")).toEqual(videoSource720);
});

it("renders without crashing - 721px width", () => {
  window.innerWidth = 721;

  const wrapper = mount(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("video").prop("poster")).toEqual(videPoster480);
  expect(wrapper.find("source").prop("src")).toEqual(videoSource480);
});

it("renders without crashing - 481px width", () => {
  window.innerWidth = 481;

  const wrapper = mount(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("video").prop("poster")).toEqual(videPoster320);
  expect(wrapper.find("source").prop("src")).toEqual(videoSource320);
});

it("renders without crashing - 480px width", () => {
  window.innerWidth = 480;

  const wrapper = mount(
    <VideoBackground>
      <div className="unique" />
    </VideoBackground>
  );

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("video").prop("poster")).toEqual(videPoster240);
  expect(wrapper.find("source").prop("src")).toEqual(videoSource240);
});
