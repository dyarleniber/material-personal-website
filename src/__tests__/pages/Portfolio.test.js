import React from "react";
import { shallow } from "enzyme";

import Portfolio from "../../pages/Portfolio";
import * as filters from "../../pages/Portfolio/constants";
import usePortfolioFilter from "../../hooks/usePortfolioFilter";
import { portfolio } from "../../config/dataApi";

let wrapper;

jest.mock("../../hooks/usePortfolioFilter");

beforeEach(() => {
  jest.clearAllMocks();
});

it("renders without crashing", () => {
  const filteredPortfolio = portfolio;
  const filter = filters.ALL_FILTER;
  const setFilter = jest.fn();

  usePortfolioFilter.mockImplementation(() => {
    return {
      filteredPortfolio,
      filter,
      setFilter,
    };
  });

  wrapper = shallow(<Portfolio />);

  expect(wrapper).toMatchSnapshot();
});

it("sets filter", () => {
  const filteredPortfolio = [];
  const filter = filters.ALL_FILTER;
  const setFilter = jest.fn();

  usePortfolioFilter.mockImplementation(() => {
    return {
      filteredPortfolio,
      filter,
      setFilter,
    };
  });

  wrapper = shallow(<Portfolio />);

  wrapper
    .find("#tab-filter")
    .first()
    .props()
    .onChange(null, filters.FRONTEND_FILTER);

  expect(setFilter).toHaveBeenCalledTimes(1);
  expect(setFilter).toHaveBeenCalledWith(filters.FRONTEND_FILTER);
});
