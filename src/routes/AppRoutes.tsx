import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import RecommendationsPage from "../pages/RecommendationsPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import RecommendationPage from "../pages/RecommendationPage";
import SpecialistPage from "../pages/SpecialistPage";
import CreateRecommendationPage from "../pages/CreateRecommendationPage";
import SpecialistsPage from "../pages/SpecialistsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RecommendationsPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="recommendations" element={<RecommendationsPage />} />
      <Route path="recommendation/:id" element={<RecommendationPage />} />
      <Route path="specialist" element={<SpecialistPage />} />
      <Route path="specialists" element={<SpecialistsPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="create" element={<CreateRecommendationPage />} />
    </Routes>
  );
}
