import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/recommendation/MainPage";

import RecommendationPage from "../pages/recommendation/HookPage";
import HookPage from "../pages/recommendation/HookPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hook/:id" element={<HookPage />} />
      {/* <Route path="home" element={<Home />} /> */}
      {/* <Route path="/" element={<MyComponent />} /> */}
    </Routes>
  );
}
