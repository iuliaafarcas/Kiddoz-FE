import React from "react";
import Navbar from "../../components/bar/Navbar";
import CreateRecommendationForm from "../../components/specialist/create/recommendation/CreateRecommendationForm";
import TypeNavbar from "../../components/bar/TypeNavbar";
import { Grid } from "@mui/material";

const CreateRecommendationPage = () => {
  return (
    <Grid sx={{ backgroundColor: "#F5F5F5" }}>
      <Navbar />
      <TypeNavbar />
      <CreateRecommendationForm />
    </Grid>
  );
};
export default CreateRecommendationPage;
