import React from "react";
import Navbar from "../components/Navbar";
import MainPage from "./MainPage";
import TypeNavbar from "../components/TypeNavbar";
import { Grid } from "@mui/material";
const RecommendationsPage = () => {
  return (
    <>
      <Grid sx={{ background: "#F6F6F6" }}>
        <Navbar />
        <TypeNavbar />
        <MainPage />
      </Grid>
    </>
  );
};
export default RecommendationsPage;
