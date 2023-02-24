import { Box, Grid } from "@mui/material";
import React from "react";
import Cards from "../components/recommendations/displayRecommendations/Cards";
import Filters from "../components/recommendations/filters/Filters";

const MainPage = () => {
  return (
    <Grid sx={{ background: "#F6F6F6" }}>
      <Box sx={{ width: "360px" }} display="flex" flexDirection="row">
        <Filters />
        <Cards />
      </Box>
    </Grid>
  );
};
export default MainPage;
