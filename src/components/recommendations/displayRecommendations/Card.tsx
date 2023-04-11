import { Grid } from "@mui/material";
import DetailSection from "./card/DetailSection";
import PicSection from "./card/PicSection";
import { Link } from "react-router-dom";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useContext, useEffect } from "react";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";

const Card = () => {
  const { RecommendationObject, setRecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  // const fetchRecommendation = useCallback(async () => {
  //   try {
  //     const response = await RecommendationService.getRecommendationById(
  //       recommendation.id!
  //     );
  //     const currentRecommendation: RecommendationInterface = {
  //       title: response.data.title,
  //       description: response.data.description,
  //       fromAge: response.data.fromAge,
  //       fromUnitAge: response.data.fromUnitAge,
  //       toAge: response.data.toAge,
  //       toUnitAge: response.data.toUnitAge,
  //       type: response.data.type,
  //       image: response.data.image,
  //       specialist: response.data.specialist,
  //       benefits: response.data.benefits,
  //     };

  //     setRecommendationObject?.(currentRecommendation);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [id]);


  return (
    <>
      <Link
        to={"/recommendation/" + RecommendationObject.id}
        style={{ textDecoration: "none" }}
      >
        <Grid
          sx={{
            width: "650px",
            height: "260px",
            background: "white",
            borderRadius: "20px",
            borderColor: "black",
            marginBottom: "30px",
            boxShadow: 2,
          }}
          display="flex"
          flexDirection="row"
        >
          <PicSection />
          <DetailSection />
        </Grid>
      </Link>
    </>
  );
};
export default Card;
