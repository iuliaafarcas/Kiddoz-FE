import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@mui/material";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useContext, useState } from "react";
import RecommendationRatingService from "../../../api/RecommendationRatingService";
import { useParams } from "react-router-dom";

const RateCard = () => {
  const starNo = [1, 2, 3, 4, 5];
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const [noStar, setNoStar] = useState<number>(0);
  const parentId = 352;

  const handleClick = (no: number) => {
    console.log(RecommendationObject.id);
    setNoStar(no);
    fetchRating(RecommendationObject.id!, parentId, no);
  };
  const fetchRating = async (
    recommendationId: number,
    parentId: number,
    noStar: number
  ) => {
    try {
      const response =
        await RecommendationRatingService.addRecommendationRating(
          recommendationId,
          parentId,
          noStar
        );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "55px",
          borderRadius: "12px",
          backgroundColor: "#264653 ",
          marginLeft: "30px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "10px",
            textAlign: "center",
            paddingTop: "5px",
          }}
        >
          How would you rate this?
        </Typography>

        <Grid
          sx={{
            display: "flex",
            marginLeft: "50px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {starNo.map((element) => {
            const starColor = element <= noStar ? "#ffff00" : "white"; // Set color to red if element is 5, otherwise white

            return (
              <FontAwesomeIcon
                icon={faStar}
                key={element}
                style={{
                  marginTop: "5px",
                  width: "30px",
                  height: "20px",
                  color: starColor,
                  cursor: "pointer",
                }}
                onClick={() => handleClick(element)}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default RateCard;
