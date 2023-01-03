import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/routes/HomeScreen";
import { AboutMe } from "./src/routes/AboutMeScreen";
import { NotFound } from "./src/routes/404NotFound";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
