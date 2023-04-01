import { Box, Grid } from "@mui/material";
import React from "react";
import Cards from "../components/recommendations/displayRecommendations/Cards";
import Filters from "../components/recommendations/filters/Filters";
import family from "../assets/family.png";
const MainPage = () => {
  return (
    <Grid sx={{ background: "#F6F6F6" }}>
      <Box sx={{ width: "360px" }} display="flex" flexDirection="row">
        <Filters />
        <Cards />
        <Grid
          sx={{ display: "flex", justify: "flexEnd", alignItems: "flexEnd" }}
        >
          <Box
            component="img"
            sx={{
              width: "400px",
              height: "400px",
              marginTop: "200px",
              middle: "0",
              right: 0,
              position: "fixed",
            }}
            src={family}
          />
        </Grid>
      </Box>
    </Grid>
  );
};
export default MainPage;
