import React from "react";
import Navbar from "../../components/bar/Navbar";
import TypeNavbar from "../../components/bar/TypeNavbar";
import { Grid } from "@mui/material";
import Specialists from "../../components/specialist/display/displaySpecialists/Specialists";
import { SpecialistFilterContextProvider } from "../../components/context/SpecialistFilterContext";
const SpecialistsPage = () => {
  return (
    <>
      <Grid sx={{ background: "#F6F6F6" }}>
        <Navbar />
        <TypeNavbar />
        <SpecialistFilterContextProvider>
          <Specialists />
        </SpecialistFilterContextProvider>
      </Grid>
    </>
  );
};
export default SpecialistsPage;
