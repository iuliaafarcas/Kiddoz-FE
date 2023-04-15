import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import ViewSpecialist from "../components/specialist/aboutMe/ViewSpecialist";
import { SpecialistContextProvider } from "../components/context/SpecialistContext";
import { Grid } from "@mui/material";

const SpecialistPage = () => {
  return (
    <Grid sx={{ backgroundColor: "#F6F6F6", height: "100%", width: "100%" }}>
      <Navbar />
      <TypeNavbar />
      <SpecialistContextProvider>
        <ViewSpecialist />
      </SpecialistContextProvider>
    </Grid>
  );
};
export default SpecialistPage;
