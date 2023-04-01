import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import { Grid } from "@mui/material";
import Specialists from "../components/specialist/display/displaySpecialists/Specialists";
const SpecialistsPage = () => {
  return (
    <>
      <Grid sx={{ background: "#white" }}>
        <Navbar />
        <TypeNavbar />
        <Specialists />
      </Grid>
    </>
  );
};
export default SpecialistsPage;
