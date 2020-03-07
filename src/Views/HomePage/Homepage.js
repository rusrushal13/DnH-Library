import React from "react";
import { Grid } from "@material-ui/core";
import Books from "./Books";

const HomePage = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={3}>
        Book
      </Grid>
      <Grid item xs={3}>
        Author
      </Grid>
      <Grid item xs={3}>
        Donated By
      </Grid>
      <Grid item xs={3}>
        Current Owner
      </Grid>
      <Books />
    </Grid>
  );
};

export default HomePage;
