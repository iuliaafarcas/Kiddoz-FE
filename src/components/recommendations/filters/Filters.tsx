import { Grid } from "@mui/material";
import React from "react";
import AgeFilter from "./AgeFilter";
import RatingFilter from "./RatingFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <Grid
      sx={{
        marginTop: "160px",
        marginLeft: "125px",
        overflowY: "scroll",
        width: "250px",
        height: "550px",
      }}
      position="fixed"
    >
      <RatingFilter />
      <AgeFilter />
      <TypeFilter />
    </Grid>
  );
};
export default Filters;
