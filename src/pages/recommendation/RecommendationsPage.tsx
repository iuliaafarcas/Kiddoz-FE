import React from "react";
import Navbar from "../../components/bar/Navbar";
import MainPage from "./MainPage";
import TypeNavbar from "../../components/bar/TypeNavbar";
import { Grid } from "@mui/material";
import { RecommendationContextProvider } from "../../components/context/RecommendationContext";
const RecommendationsPage = () => {
  return (
    <RecommendationContextProvider>
      <Grid sx={{ background: "#F6F6F6" }}>
        <Navbar />
        <TypeNavbar />
        <MainPage />
      </Grid>
    </RecommendationContextProvider>
  );
};
export default RecommendationsPage;
