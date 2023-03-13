import { Grid, Typography } from "@mui/material";
import Cards from "./otherRecommendations/Cards";

const OtherRecommendations = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "Column" }}>
      <Typography sx={{ fontSize: "20px", marginTop: "30px" }}>
        <b>More on this topic</b>
      </Typography>
      <Cards />
      <Grid />
    </Grid>
  );
};
export default OtherRecommendations;
