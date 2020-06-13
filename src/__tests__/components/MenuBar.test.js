import React from "react";
import { shallow } from "enzyme";

import * as data from "../../config/dataApi";
import MenuBar from "../../components/MenuBar";

let wrapper;

const originalMenuItems = data.menuItems;

beforeAll(() => {
  delete data.menuItems;
  data.menuItems = [
    {
      to: "/",
      primary: "Home",
    },
    {
      to: "/portfolio",
      primary: "Portfolio",
    },
  ];

  wrapper = shallow(
    <MenuBar>
      <div className="unique" />
    </MenuBar>
  );
});

afterAll(() => {
  data.menuItems = originalMenuItems;
});

describe("MenuBar component", () => {
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle drawer", () => {
    expect(wrapper.find("#menubar-drawer").prop("open")).toBeFalsy();

    expect(wrapper.find("#open-menubar-button").prop("onClick")).toEqual(
      expect.any(Function)
    );
    wrapper.find("#open-menubar-button").props().onClick();
    expect(wrapper.find("#menubar-drawer").prop("open")).toBeTruthy();

    expect(wrapper.find("#close-menubar-button").prop("onClick")).toEqual(
      expect.any(Function)
    );
    wrapper.find("#close-menubar-button").props().onClick();
    expect(wrapper.find("#menubar-drawer").prop("open")).toBeFalsy();
  });
});
