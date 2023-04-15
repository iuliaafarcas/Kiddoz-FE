import { Grid, Typography } from "@mui/material";
import Cards from "./otherRecommendations/Cards";
import { useContext, useEffect } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../context/RecommendationContext";

const OtherRecommendations = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;

  useEffect(() => {
    console.log(RecommendationObject.id, "hi");
  });
  return (
    <Grid sx={{ display: "flex", flexDirection: "Column" }}>
      <Typography sx={{ fontSize: "20px", marginTop: "30px" }}>
        <b>More on this topic</b>
      </Typography>
      <Cards />
      <Grid />
    </Grid>
  );
};
export default OtherRecommendations;
