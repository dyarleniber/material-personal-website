import { useState, useEffect } from "react";

import { portfolio } from "../config/dataApi";
import * as filters from "../pages/Portfolio/constants";
import * as types from "../components/Cards/constants";

export const handleFilter = (items, filter) =>
  items.filter((item) => {
    if (filter === filters.FRONTEND_FILTER) {
      return item.type === types.FRONTEND_TYPE;
    }
    if (filter === filters.BACKEND_FILTER) {
      return item.type === types.BACKEND_TYPE;
    }
    return true;
  });

const handleOrder = (items) =>
  items.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    return -1;
  });

function usePortfolioFilter() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(filters.ALL_FILTER);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  useEffect(() => {
    setFilteredPortfolio(handleFilter(portfolio, filter));
    setFilteredPortfolio((prevState) => handleOrder(prevState));
    setLoading(false);
  }, [filter]);

  return { filteredPortfolio, filter, setFilter, loading };
}

export default usePortfolioFilter;
