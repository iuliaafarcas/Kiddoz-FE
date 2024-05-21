import React from "react";
import Navbar from "../../components/bar/Navbar";
import TypeNavbar from "../../components/bar/TypeNavbar";
import { Box, Grid } from "@mui/material";
import { HookContextProvider } from "../../components/context/HookContext";
import HooksFilter from "../../components/recommendations/filters/HooksFilter";
import MainPagePhoto from "../../assets/MainPagePhoto.jpg";
const MainPage = () => {
  return (
    <HookContextProvider>
      <Grid sx={{ background: "white" }}>
        <Navbar />
        <TypeNavbar />
        <Grid
          sx={{
            marginTop: "150px",
            marginLeft: "120px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <HooksFilter />
          <Box
            component="img"
            sx={{
              height: 550,
              width: 550,

              marginLeft: "200px",
            }}
            alt="Description of the image"
            src={MainPagePhoto}
          />
        </Grid>
      </Grid>
    </HookContextProvider>
  );
};
export default MainPage;
