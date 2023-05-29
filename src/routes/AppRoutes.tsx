import React from "react";
import { Route, Routes } from "react-router-dom";
import RecommendationsPage from "../pages/recommendation/RecommendationsPage";
import Login from "../pages/registration/LoginPage";
import Register from "../pages/registration/RegisterPage";
import RecommendationPage from "../pages/recommendation/RecommendationPage";
import SpecialistPage from "../pages/specialist/SpecialistPage";
import CreateRecommendationPage from "../pages/recommendation/CreateRecommendationPage";
import SpecialistsPage from "../pages/specialist/SpecialistsPage";
import DotSpinner from "../components/spinner/DotSpinner";
import Home from "../components/home/Home";
import MyComponent from "../components/home/Background";
// import IntroPage from "../pages/IntroPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="recommendations" element={<RecommendationsPage />} />
      <Route path="recommendation/:id" element={<RecommendationPage />} />
      <Route path="specialist/:id" element={<SpecialistPage />} />
      <Route path="specialists" element={<SpecialistsPage />} />
      <Route path="create" element={<CreateRecommendationPage />} />
      <Route path="home" element={<Home />} />
      <Route path="/" element={<MyComponent />} />
      {/* <Route path="spin" element={<DotSpinner />} /> */}
    </Routes>
  );
}
