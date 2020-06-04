import React from "react";
import { shallow } from "enzyme";

import MenuBar from "../../components/MenuBar";

let wrapper;

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    ...originalModule,
    useLocation: () => ({
      pathname: "/",
    }),
  };
});

beforeAll(() => {
  wrapper = shallow(
    <MenuBar>
      <div className="unique" />
    </MenuBar>
  );
});

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("toggles drawer", () => {
  expect(wrapper.find("#menubar-drawer").prop("open")).toBeFalsy();

  expect(wrapper.find("#open-menubar-button").prop("onClick")).toEqual(
    expect.any(Function)
  );
  expect(wrapper.find("#close-menubar-button").prop("onClick")).toEqual(
    expect.any(Function)
  );

  wrapper.find("#open-menubar-button").props().onClick();
  expect(wrapper.find("#menubar-drawer").prop("open")).toBeTruthy();

  wrapper.find("#close-menubar-button").props().onClick();
  expect(wrapper.find("#menubar-drawer").prop("open")).toBeFalsy();
});
