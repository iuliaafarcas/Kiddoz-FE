import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useContext } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";

const Card = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;

  const handleClick = () => {
    window.scrollTo(0, 0);
    window.location.href = "/recommendation/" + RecommendationObject.id;
  };
  return (
    <Grid
      sx={{
        maxWidth: "160px",
        height: "230px",
        borderRadius: "20px",
        marginRight: "15px",
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Grid
        sx={{
          width: "140px",
          height: "150px",
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "140px",
            height: "120px",
            borderRadius: "16px",
          }}
          src={RecommendationObject.image}
        />
      </Grid>
      <Typography
        sx={{ fontSize: "15px", lineHeight: "1rem", marginTop: "-15px" }}
      >
        {RecommendationObject.title}
      </Typography>

      <Typography sx={{ fontSize: "12px", marginTop: "2px" }}>
        {RecommendationObject.type}
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        {RecommendationObject.fromAge}+
      </Typography>
    </Grid>
  );
};
export default Card;
