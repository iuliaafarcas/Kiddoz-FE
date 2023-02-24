import { Grid } from "@mui/material";
import React from "react";
import AgeFilter from "./AgeFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <Grid sx={{ marginTop: "160px", marginLeft: "110px" }} position="fixed">
      <AgeFilter />
      <TypeFilter />
    </Grid>
  );
};
export default Filters;
