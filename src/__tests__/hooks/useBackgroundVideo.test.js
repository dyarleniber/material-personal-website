import { renderHook } from "@testing-library/react-hooks";

import useBackgroundVideo from "../../hooks/useBackgroundVideo";

jest.mock("../../assets/images/code240.jpg", () => "videoposter240.jpg");
jest.mock("../../assets/images/code320.jpg", () => "videoposter320.jpg");
jest.mock("../../assets/images/code480.jpg", () => "videoposter480.jpg");
jest.mock("../../assets/images/code720.jpg", () => "videoposter720.jpg");
jest.mock("../../assets/videos/code240.mp4", () => "videosource240.mp4");
jest.mock("../../assets/videos/code320.mp4", () => "videosource320.mp4");
jest.mock("../../assets/videos/code480.mp4", () => "videosource480.mp4");
jest.mock("../../assets/videos/code720.mp4", () => "videosource720.mp4");

const originalInnerWidth = window.innerWidth;

afterAll(() => {
  window.innerWidth = originalInnerWidth;
});

describe("useBackgroundVideo hook", () => {
  it("should return the appropriate video based on the 1281px screen size", () => {
    delete window.innerWidth;
    window.innerWidth = 1281;

    const { result } = renderHook(() => useBackgroundVideo());

    expect(result.current.videPoster).toEqual("videoposter720.jpg");
    expect(result.current.videoSource).toEqual("videosource720.mp4");
  });

  it("should return the appropriate video based on the 721px screen size", () => {
    delete window.innerWidth;
    window.innerWidth = 721;

    const { result } = renderHook(() => useBackgroundVideo());

    expect(result.current.videPoster).toEqual("videoposter480.jpg");
    expect(result.current.videoSource).toEqual("videosource480.mp4");
  });

  it("should return the appropriate video based on the 481px screen size", () => {
    delete window.innerWidth;
    window.innerWidth = 481;

    const { result } = renderHook(() => useBackgroundVideo());

    expect(result.current.videPoster).toEqual("videoposter320.jpg");
    expect(result.current.videoSource).toEqual("videosource320.mp4");
  });

  it("should return the appropriate video based on the 480px screen size", () => {
    delete window.innerWidth;
    window.innerWidth = 480;

    const { result } = renderHook(() => useBackgroundVideo());

    expect(result.current.videPoster).toEqual("videoposter240.jpg");
    expect(result.current.videoSource).toEqual("videosource240.mp4");
  });
});
