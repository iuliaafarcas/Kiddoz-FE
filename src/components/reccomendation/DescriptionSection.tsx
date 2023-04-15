import { Grid, Typography } from "@mui/material";
import OtherRecommendations from "./OtherRecommendations";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../context/RecommendationContext";
import { useContext } from "react";

const DescriptionSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  return (
    <Grid>
      <Typography sx={{ fontSize: "20px" }}>
        <b> About this topic</b>
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          width: "1030px",
          textAlign: "justify",
        }}
      >
        {RecommendationObject.description}
      </Typography>
      <OtherRecommendations />
    </Grid>
  );
};
export default DescriptionSection;
