import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import ViewSpecialist from "../components/specialist/aboutMe/ViewSpecialist";
import { SpecialistContextProvider } from "../components/context/SpecialistContext";

const SpecialistPage = () => {
  return (
    <>
      <Navbar />
      <TypeNavbar />
      <SpecialistContextProvider>
        <ViewSpecialist />
      </SpecialistContextProvider>
    </>
  );
};
export default SpecialistPage;
