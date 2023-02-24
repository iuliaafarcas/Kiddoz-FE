import { Box, Grid, Typography } from "@mui/material";
import specialist from "../../../../../assets/specialist.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
const BottomSection = () => {
  const noLikes = 2.089;
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
        <FaRegThumbsUp
          stroke="black"
          stroke-width="30px"
          size="15px"
          cursor="pointer"
          style={{ float: "right" }}
        />
        <Typography
          sx={{
            fontSize: "10px",
            color: "black",
            marginLeft: "5px",
          }}
        >
          {noLikes} people like this
        </Typography>
      </Grid>
    </>
  );
};
export default BottomSection;
