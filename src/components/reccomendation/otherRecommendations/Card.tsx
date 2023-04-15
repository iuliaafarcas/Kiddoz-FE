import { Grid, Box, Typography } from "@mui/material";
import volei from "../../../assets/volei.jpg";
import { useContext } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";

const Card = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  return (
    <Link
        to={"/recommendation/" + RecommendationObject.id}
        style={{ textDecoration: "none" }}
      >
    <Grid
      sx={{
        maxWidth: "200px",
        height: "220px",
        borderRadius: "20px",
        marginRight: "15px",
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        textAlign: "center",
        cursor:"pointer"
      }}
    >
      <Grid
        sx={{
          width: "130px",
          height: "150px",
          marginBottom: "5px",
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "130px",
            height: "120px",
            borderRadius: "20px",
          }}
          src={RecommendationObject.image}
        />
      </Grid>
      <Typography sx={{ fontSize: "17px" }}>
        <b>{RecommendationObject.title}</b>
      </Typography>

      <Typography sx={{ fontSize: "14px" }}>
        {RecommendationObject.type}
      </Typography>
      <Typography>{RecommendationObject.fromAge}+</Typography>
    </Grid>
    </Link>
  );
};
export default Card;
