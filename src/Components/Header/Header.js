import React from "react";
import { Grid } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} className={"Header"}>
        D n H Library
      </Grid>
    </Grid>
  );
};

export default Header;
