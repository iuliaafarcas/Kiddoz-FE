import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../../../assets/specialist.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomSection = () => {
  const noLikes = 4.5;
  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "70px",
          borderRadius: "20px",
          marginTop: "6px",
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
            <Typography sx={{ fontSize: "12px", color: "black" }}>
              Valentino Del More
            </Typography>
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
      <Grid
        sx={{
          float: "right",
          marginTop: "-20px",
          display: "flex",
          flexDirection: "row",
          paddingRight: "20px",
          paddingBottom: "10px",
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: "#F4A261",
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        />
        <Typography
          sx={{
            fontSize: "12px",
            color: "black",
          }}
        >
          {noLikes}
        </Typography>
      </Grid>
    </>
  );
};
export default BottomSection;
