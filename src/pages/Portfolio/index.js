import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

import * as filters from "./constants";
import Card from "../../components/Cards";
import usePortfolioFilter from "../../hooks/usePortfolioFilter";

function Portfolio() {
  const { filteredPortfolio, filter, setFilter } = usePortfolioFilter();

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Tabs
          id="tab-filter"
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
}

export default Portfolio;
