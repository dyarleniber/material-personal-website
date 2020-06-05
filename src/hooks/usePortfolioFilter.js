import { useState, useEffect } from "react";

import * as filters from "../pages/Portfolio/constants";
import * as types from "../components/Cards/constants";

export const handleFilter = (portfolioItems, filter) =>
  portfolioItems.filter((item) => {
    if (filter === filters.FRONTEND_FILTER) {
      return item.type === types.FRONTEND_TYPE;
    }
    if (filter === filters.BACKEND_FILTER) {
      return item.type === types.BACKEND_TYPE;
    }
    return true;
  });

const handleOrder = (portfolioItems) =>
  portfolioItems.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    return -1;
  });

function usePortfolioFilter(portfolioItems) {
  const [filter, setFilter] = useState(filters.ALL_FILTER);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  useEffect(() => {
    setFilteredPortfolio(handleFilter(portfolioItems, filter));
    setFilteredPortfolio((prevState) => handleOrder(prevState));
  }, [filter]);

  return { filteredPortfolio, filter, setFilter };
}

export default usePortfolioFilter;
