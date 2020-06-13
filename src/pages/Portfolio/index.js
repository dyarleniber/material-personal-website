import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import { portfolioData } from "../../config/dataApi";
import * as filters from "./constants";
import Card from "../../components/Cards";
import usePortfolioFilter from "../../hooks/usePortfolioFilter";

function Portfolio() {
  const {
    filteredPortfolio,
    filter,
    setFilter,
    loading,
  } = usePortfolioFilter();

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          {portfolioData.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {portfolioData.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          id="tab-filter"
          value={filter}
          onChange={handleChange}
          aria-label="porfolio filter"
          centered
        >
          <Tab value={filters.ALL_FILTER} label="ALL" />
          <Tab value={filters.FRONTEND_FILTER} label="FRONT-END" />
          <Tab value={filters.BACKEND_FILTER} label="BACK-END" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {loading ? (
            <>
              <Grid item>
                <Skeleton variant="rect" width={300} height={350} />
              </Grid>
              <Grid item>
                <Skeleton variant="rect" width={300} height={350} />
              </Grid>
              <Grid item>
                <Skeleton variant="rect" width={300} height={350} />
              </Grid>
            </>
          ) : (
            filteredPortfolio.map((portfolioItem) => (
              <Grid key={portfolioItem.id} item>
                <Card {...portfolioItem} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
