import React from "react";
import Navbar from "../../components/bar/Navbar";
import CreateRecommendationForm from "../../components/specialist/create/recommendation/CreateRecommendationForm";
import TypeNavbar from "../../components/bar/TypeNavbar";

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
