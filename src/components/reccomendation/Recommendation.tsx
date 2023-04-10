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
import RecommendationService from "../../api/RecommendationService";
import RecommendationInterface from "../../interfaces/RecommendationInterface";

const Recommendation = () => {
  const { setRecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const id = 102;
  const fetchRecommendation = useCallback(async () => {
    try {
      const response = await RecommendationService.getRecommendationById(id);
      const currentRecommendation: RecommendationInterface = {
        title: response.data.title,
        description: response.data.description,
        fromAge: response.data.fromAge,
        fromUnitAge: response.data.fromUnitAge,
        toAge: response.data.toAge,
        toUnitAge: response.data.toUnitAge,
        type: response.data.type,
        image: response.data.image,
        specialist: response.data.specialist,
        benefits: response.data.benefits,
      };
      console.log(currentRecommendation);

      setRecommendationObject?.(currentRecommendation);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchRecommendation();
  }, [setRecommendationObject, fetchRecommendation]);

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
