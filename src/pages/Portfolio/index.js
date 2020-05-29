import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

import { portfolio } from "../../config/dataApi";
import * as filters from "./constants";
import Card from "../../components/Cards";
import * as types from "../../components/Cards/constants";

const Portfolio = () => {
  const [filter, setFilter] = useState(filters.ALL_FILTER);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  useEffect(() => {
    setFilteredPortfolio(
      portfolio.filter((item) => {
        if (filter === filters.FRONTEND_FILTER) {
          return item.type === types.FRONTEND_TYPE;
        }
        if (filter === filters.BACKEND_FILTER) {
          return item.type === types.BACKEND_TYPE;
        }
        return true;
      })
    );
    setFilteredPortfolio((prevState) => {
      return prevState.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    });
  }, [filter]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Tabs
          value={filter}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="porfolio filter"
        >
          <Tab value={filters.ALL_FILTER} label="ALL" />
          <Tab value={filters.FRONTEND_FILTER} label="FRONT-END" />
          <Tab value={filters.BACKEND_FILTER} label="BACK-END" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {filteredPortfolio.map((portfolioItem) => (
            <Grid key={portfolioItem.id} item>
              <Card {...portfolioItem} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
