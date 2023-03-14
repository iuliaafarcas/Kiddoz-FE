import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../assets/specialist.jpg";
import { Link } from "react-router-dom";

const BottomSection = () => {
  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "50px",
          marginTop: "10px",
          borderRadius: "20px",
          marginLeft: "40px",
        }}
      >
        <Typography sx={{ fontSize: "10px", color: "gray" }}>
          {" "}
          Recommended by
        </Typography>

        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "100px",
              marginTop: "4px",
            }}
            src={specialist}
          />

          <Grid sx={{ marginLeft: "5px" }}>
            <Link to="/specialist" style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: "12px", color: "black" }}>
                Valentino Del More
              </Typography>
            </Link>
            <Typography
              sx={{
                marginTop: "-3px",
                fontSize: "10px",
                color: "black",
                marginLeft: "3px",
              }}
            >
              professional sports trainer
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BottomSection;
