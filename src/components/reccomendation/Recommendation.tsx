import { Grid } from "@mui/material";
import DescriptionSection from "./DescriptionSection";
import DetailSection from "./DetailSection";
import OtherRecommendations from "./OtherRecommendations";
import PicSection from "./PicSection";
import { useCallback, useContext, useEffect } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../context/RecommendationContext";
import RecommendationService from "../../api/recommendation/RecommendationService";
import RecommendationInterface from "../../interfaces/RecommendationInterface";

const Recommendation = () => {
  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <Grid
        sx={{
          width: "1100px",
          height: "400px",
          marginTop: "140px",
          marginLeft: "100px",
          paddingLeft: "30px",
          paddingRight: "30px",

          paddingTop: "10px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <PicSection />
        <DetailSection />
      </Grid>
      <Grid
        sx={{
          width: "1100px",
          height: "100%",
          marginLeft: "100px",
          paddingLeft: "30px",
          paddingRight: "30px",

          backgroundColor: "white",
        }}
      >
        <DescriptionSection />
      </Grid>
    </Grid>
  );
};
export default Recommendation;
