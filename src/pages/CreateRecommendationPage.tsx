import React from "react";
import Navbar from "../components/Navbar";
import CreateRecommendationForm from "../components/specialist/create/recommendation/CreateRecommendationForm";
import TypeNavbar from "../components/TypeNavbar";

const CreateRecommendationPage = () => {
  return (
    <>
      <Navbar />
      <TypeNavbar />
      <CreateRecommendationForm />
    </>
  );
};
export default CreateRecommendationPage;
