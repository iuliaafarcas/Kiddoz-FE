import { Grid, Typography } from "@mui/material";
import LetsChat from "./LetsChat";
import RateCard from "./RateCard";

const DetailSection = () => {
  return (
    <Grid
      sx={{
        width: "600px",
        height: "300px",
        marginLeft: "30px",
      }}
    >
      <Typography sx={{ fontSize: "30px" }}>
        <b>Valentino Del More</b>
      </Typography>
      <Typography sx={{ fontSize: "16px", marginTop: "-7px" }}>
        profesional sports trainer
      </Typography>
      <Typography sx={{ marginTop: "10px", color: "grey" }}>
        <i> "Only he who can see the invisible can do the impossible"</i>
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <RateCard />
        <LetsChat />
      </Grid>
    </Grid>
  );
};
export default DetailSection;
