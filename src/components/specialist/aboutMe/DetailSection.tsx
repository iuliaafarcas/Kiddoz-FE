import { Box, Grid, Typography } from "@mui/material";
import LetsChat from "./LetsChat";
import RateCard from "./RateCard";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import specialistAndChild from "../../../assets/specialistChild.jpg";
const DetailSection = () => {
  return (
    <Grid
      sx={{
        width: "600px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid sx={{ width: "470px" }}>
          <Typography sx={{ fontSize: "30px" }}>
            <b>Valentino Del More</b>
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#F4A261",
              width: "25px",
              height: "25px",
              marginRight: "10px",
            }}
          />
          <Typography sx={{ fontSize: "20px", float: "right" }}>4.5</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid>
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
        {/* <Grid sx={{ display: "flex", marginLeft: "130px", marginTop: "-70px" }}>
          <Box
            component="img"
            sx={{
              width: "230px",
              height: "230px",
              // marginTop: "430px",
            }}
            src={specialistAndChild}
          />
        </Grid> */}
      </Grid>
    </Grid>
  );
};
export default DetailSection;
