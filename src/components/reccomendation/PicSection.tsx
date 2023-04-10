import { Grid, Box } from "@mui/material";
import volei from "../../assets/volei.jpg";
import { useContext } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../context/RecommendationContext";

const PicSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  return (
    <>
      <Grid
        sx={{
          width: "500px",
          height: "300px",
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "500px",
            height: "330px",
            borderRadius: "20px",
            marginTop: "15px",
          }}
          src={RecommendationObject.image}
        />
      </Grid>
    </>
  );
};
export default PicSection;
