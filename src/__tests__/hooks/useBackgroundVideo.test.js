import { renderHook } from "@testing-library/react-hooks";

import useBackgroundVideo from "../../hooks/useBackgroundVideo";

const { innerWidth } = window;

beforeEach(() => {
  delete window.innerWidth;
});

afterAll(() => {
  window.innerWidth = innerWidth;
});

it("should return the appropriate video based on the 1281px screen size", () => {
  window.innerWidth = 1281;

  const { result } = renderHook(() => useBackgroundVideo());

  expect(result.current.videPoster).toEqual(expect.stringContaining("code720"));
  expect(result.current.videoSource).toEqual(
    expect.stringContaining("code720")
  );
});

it("should return the appropriate video based on the 721px screen size", () => {
  window.innerWidth = 721;

  const { result } = renderHook(() => useBackgroundVideo());

  expect(result.current.videPoster).toEqual(expect.stringContaining("code480"));
  expect(result.current.videoSource).toEqual(
    expect.stringContaining("code480")
  );
});

it("should return the appropriate video based on the 481px screen size", () => {
  window.innerWidth = 481;

  const { result } = renderHook(() => useBackgroundVideo());

  expect(result.current.videPoster).toEqual(expect.stringContaining("code320"));
  expect(result.current.videoSource).toEqual(
    expect.stringContaining("code320")
  );
});

it("should return the appropriate video based on the 480px screen size", () => {
  window.innerWidth = 480;

  const { result } = renderHook(() => useBackgroundVideo());

  expect(result.current.videPoster).toEqual(expect.stringContaining("code240"));
  expect(result.current.videoSource).toEqual(
    expect.stringContaining("code240")
  );
});
