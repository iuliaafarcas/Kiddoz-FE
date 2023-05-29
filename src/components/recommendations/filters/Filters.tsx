/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AgeFilter from "./AgeFilter";
import RatingFilter from "./RatingFilter";
import TypeFilter from "./TypeFilter";
import {
  MyContext,
  MyContextProvider,
} from "../../context/RecommendationFilterContext";

const Filters = ({ fetchRecommendations }: any) => {
  const {
    typeFilter,
    fromAgeFilter,
    toAgeFilter,
    ageUnitFilter,
    ratingFilter,
    titleFilter,
  } = useContext(MyContext);

  useEffect(() => {
    fetchRecommendations(
      typeFilter,
      fromAgeFilter,
      toAgeFilter,
      ageUnitFilter,
      ratingFilter,
      titleFilter
    );
  }, [
    typeFilter,
    fromAgeFilter,
    toAgeFilter,
    ageUnitFilter,
    ratingFilter,
    titleFilter,
  ]);

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
