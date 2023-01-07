import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import RecommendationsPage from "../pages/RecommendationsPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/LoginPage";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RecommendationsPage />} />
      <Route path="login" element={<Login />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="recommendations" element={<RecommendationsPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}
