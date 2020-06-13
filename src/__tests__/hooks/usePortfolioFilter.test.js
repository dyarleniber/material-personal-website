import { renderHook, act } from "@testing-library/react-hooks";

import * as data from "../../config/dataApi";
import usePortfolioFilter from "../../hooks/usePortfolioFilter";
import * as filters from "../../pages/Portfolio/constants";
import * as types from "../../components/Cards/constants";

const originalPortfolio = data.portfolio;

beforeEach(() => {
  delete data.portfolio;
  data.portfolio = [];
});

afterAll(() => {
  data.portfolio = originalPortfolio;
});

describe("usePortfolioFilter hook", () => {
  it("should return the initial portfolio filter state", () => {
    const { result } = renderHook(() => usePortfolioFilter());

    expect(result.current.filteredPortfolio).toEqual([]);
    expect(result.current.filter).toEqual(filters.ALL_FILTER);
    expect(typeof result.current.setFilter).toEqual("function");
    expect(result.current.loading).toEqual(false);
  });

  it("should filter and sort portfolio items by id", () => {
    const frontendItem1 = {
      id: 1,
      name: "Portfolio front-end 1 item test",
      description: "Portfolio front-end 1 item description",
      type: types.FRONTEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    };

    const frontendItem2 = {
      id: 2,
      name: "Portfolio front-end 2 item test",
      description: "Portfolio front-end 2 item description",
      type: types.FRONTEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    };

    const backendItem3 = {
      id: 3,
      name: "Portfolio back-end 3 item test",
      description: "Portfolio back-end 3 item description",
      type: types.BACKEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    };

    const backendItem4 = {
      id: 4,
      name: "Portfolio back-end 4 item test",
      description: "Portfolio back-end 4 item description",
      type: types.BACKEND_TYPE,
      technologies: [],
      homepage: null,
      github: null,
    };

    delete data.portfolio;
    data.portfolio = [backendItem3, backendItem4, frontendItem2, frontendItem1];

    const { result } = renderHook(() => usePortfolioFilter());

    expect(result.current.filteredPortfolio).toEqual([
      frontendItem1,
      frontendItem2,
      backendItem3,
      backendItem4,
    ]);

    act(() => {
      result.current.setFilter(filters.FRONTEND_FILTER);
    });
    expect(result.current.filteredPortfolio).toEqual([
      frontendItem1,
      frontendItem2,
    ]);
    expect(result.current.filter).toEqual(filters.FRONTEND_FILTER);

    act(() => {
      result.current.setFilter(filters.BACKEND_FILTER);
    });
    expect(result.current.filteredPortfolio).toEqual([
      backendItem3,
      backendItem4,
    ]);
    expect(result.current.filter).toEqual(filters.BACKEND_FILTER);

    act(() => {
      result.current.setFilter(filters.ALL_FILTER);
    });
    expect(result.current.filteredPortfolio).toEqual([
      frontendItem1,
      frontendItem2,
      backendItem3,
      backendItem4,
    ]);
    expect(result.current.filter).toEqual(filters.ALL_FILTER);
  });
});
