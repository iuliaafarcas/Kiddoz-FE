import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import { Grid } from "@mui/material";
import Recommendation from "../components/reccomendation/Recommendation";
const RecommendationPage = () => {
  return (
    <>
      <Grid sx={{ background: "white" }}>
        <Navbar />
        <TypeNavbar />
        <Recommendation />
      </Grid>
    </>
  );
};
export default RecommendationPage;
