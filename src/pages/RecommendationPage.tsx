import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import { Grid } from "@mui/material";
import Recommendation from "../components/reccomendation/Recommendation";
import { RecommendationContextProvider } from "../components/context/RecommendationContext";
const RecommendationPage = () => {
  return (
    <RecommendationContextProvider>
      <Grid
        sx={{
          background: "#f5f5f5",
          height: "100%",
          width: "100%",
        }}
      >
        <Navbar />
        <TypeNavbar />
        <Recommendation />
      </Grid>
    </RecommendationContextProvider>
  );
};
export default RecommendationPage;
