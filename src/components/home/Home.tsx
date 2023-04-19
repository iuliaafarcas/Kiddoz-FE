import { Box, Grid } from "@mui/material";
import IntroSection from "./Intro";
import Navbar from "./Navbar";
import logo from "../../assets/logo.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Grid
        sx={{
          width: "250px",
          height: "240px",
          borderRadius: "20px",
          marginTop: "200px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "500px",
            height: "250px",

            borderRadius: "20px",
            marginRight: "10px",
          }}
          src={logo}
        />
      </Grid>
    </>
  );
};
export default Home;
