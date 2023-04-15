import { Grid, Box } from "@mui/material";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../../context/RecommendationContext";
import { useContext, useEffect } from "react";

const PicSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;

  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "240px",
          borderRadius: "20px",
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "250px",
            height: "240px",
            borderRadius: "20px",
            marginRight: "10px",
          }}
          src={RecommendationObject.image}
        />
      </Grid>
    </>
  );
};
export default PicSection;
