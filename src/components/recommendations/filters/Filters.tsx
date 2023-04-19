import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AgeFilter from "./AgeFilter";
import RatingFilter from "./RatingFilter";
import TypeFilter from "./TypeFilter";
import { MyContext, MyContextProvider } from "../../context/FilterContext";

const Filters = ({ fetchRecommendations }: any) => {
  const { typeFilter, ageFilter, ageUnitFilter, ratingFilter } =
    useContext(MyContext);

  useEffect(() => {
    fetchRecommendations(typeFilter, ageFilter, ageUnitFilter, ratingFilter);
  }, [typeFilter, ageFilter, ageUnitFilter, ratingFilter]);
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
