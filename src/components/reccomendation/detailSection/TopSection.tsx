import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
const TopSection = () => {
  return (
    <>
      <Grid
        sx={{
          //   background: "purple",
          width: "540px",
          height: "65px",
          borderRadius: "20px",
          marginLeft: "10px",
          marginTop: "15px",
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid sx={{ width: "540px", marginLeft: "20px" }}>
          <Typography sx={{ fontSize: "20px", color: "black" }}>
            <b>Volleyball</b>
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "black" }}>
            Sport
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "black" }}>
            Recommended age:
          </Typography>
        </Grid>
        <Grid
          sx={{ width: "540px", paddingRight: "20px", marginRight: "15px" }}
        >
          <FaBookmark
            stroke="black"
            stroke-width="40px"
            color="white"
            size="25px"
            cursor="pointer"
            style={{ float: "right" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default TopSection;
