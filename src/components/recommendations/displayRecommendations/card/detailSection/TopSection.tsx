import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
const TopSection = () => {
  return (
    <>
      <Grid
        sx={{
          //   background: "purple",
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
            background: "#2A9D8F",
            borderRadius: "20px",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "white" }}>
            <b>Age</b>
          </Typography>

          <Typography sx={{ fontSize: "20px", color: "white" }}>
            <b>6+</b>
          </Typography>
        </Grid>

        <Grid sx={{ width: "200px", marginLeft: "20px" }}>
          <Typography sx={{ fontSize: "20px", color: "black" }}>
            <b>Volleyball</b>
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "black" }}>
            Sport
          </Typography>
        </Grid>
        <Grid sx={{ width: "100px", paddingRight: "20px" }}>
          <FaBookmark
            stroke="black"
            stroke-width="40px"
            // width="100px"
            // height="100px"
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
