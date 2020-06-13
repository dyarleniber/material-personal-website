import React from "react";
import { shallow } from "enzyme";

import * as data from "../../config/dataApi";
import Portfolio from "../../pages/Portfolio";
import * as filters from "../../pages/Portfolio/constants";
import * as types from "../../components/Cards/constants";
import usePortfolioFilter from "../../hooks/usePortfolioFilter";

jest.mock("../../hooks/usePortfolioFilter");

let wrapper;

let filteredPortfolio;
let filter;
let setFilter;
let loading;

const originalPortfolioData = data.portfolioData;

beforeAll(() => {
  delete data.portfolioData;
  data.portfolioData = {
    title: "portfolio title",
    description: "portfolio description",
  };

  filteredPortfolio = [
    {
      id: 1,
      name: "Portfolio front-end 1 item test",
      description: "Portfolio front-end 1 item description",
      type: types.FRONTEND_TYPE,
      technologies: ["tech1", "tech2"],
      homepage: "homepageexample",
      github: "githubexample",
    },
    {
      id: 2,
      name: "Portfolio front-end 2 item test",
      description: "Portfolio front-end 2 item description",
      type: types.FRONTEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    },
    {
      id: 3,
      name: "Portfolio back-end 3 item test",
      description: "Portfolio back-end 3 item description",
      type: types.BACKEND_TYPE,
      technologies: ["tech1", "tech2"],
      homepage: "homepageexample",
      github: "githubexample",
    },
    {
      id: 4,
      name: "Portfolio back-end 4 item test",
      description: "Portfolio back-end 4 item description",
      type: types.BACKEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    },
  ];
  filter = filters.ALL_FILTER;
  setFilter = jest.fn();
  loading = false;

  usePortfolioFilter.mockImplementation(() => {
    return {
      filteredPortfolio,
      filter,
      setFilter,
      loading,
    };
  });

  wrapper = shallow(<Portfolio />);
});

beforeEach(() => {
  usePortfolioFilter.mockClear();
});

afterAll(() => {
  data.portfolioData = originalPortfolioData;
});

describe("Portfolio page", () => {
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a skeleton card when loading", () => {
    loading = true;

    usePortfolioFilter.mockImplementation(() => {
      return {
        filteredPortfolio,
        filter,
        setFilter,
        loading,
      };
    });

    wrapper = shallow(<Portfolio />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should set filter", () => {
    wrapper
      .find("#tab-filter")
      .first()
      .props()
      .onChange(null, filters.FRONTEND_FILTER);

    expect(setFilter).toHaveBeenCalledTimes(1);
    expect(setFilter).toHaveBeenCalledWith(filters.FRONTEND_FILTER);
  });
});
