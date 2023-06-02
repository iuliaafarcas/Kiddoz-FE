import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../../../context/RecommendationContext";
import { useContext, useEffect, useState } from "react";
import RecommendationRatingService from "../../../../../api/recommendation/RecommendationRatingService";
const TopSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const [noStars, setNoStars] = useState(0);
  const fetchRating = async () => {
    try {
      const response =
        await RecommendationRatingService.getRatingByRecommendationId(
          RecommendationObject.id!
        );
      setNoStars(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchRating();
  });
  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "65px",
          borderRadius: "20px",
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid
          sx={{
            width: "50px",
            background: "#264653",
            borderRadius: "12px",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "white" }}>
            <b>{RecommendationObject.fromUnitAge}</b>
          </Typography>

          <Typography sx={{ fontSize: "20px", color: "white" }}>
            <b>{RecommendationObject.fromAge}+</b>
          </Typography>
        </Grid>

        <Grid
          sx={{
            width: "230px",
            height: "60px",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
              lineHeight: "1.2rem",
            }}
          >
            <b>{RecommendationObject.title}</b>
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "black", marginTop: "7px" }}
          >
            {RecommendationObject.type}
          </Typography>
        </Grid>

        {noStars !== 0 && (
          <Grid
            sx={{
              float: "right",
              display: "flex",
              marginLeft: "40px",
              flexDirection: "row",
              paddingRight: "20px",
              paddingBottom: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#F4A261",
                width: "20px",
                height: "20px",
                marginRight: "5px",
                float: "right",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                color: "black",
              }}
            >
              {noStars.toFixed(1)}
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default TopSection;
