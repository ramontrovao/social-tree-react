import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/routes/HomeScreen.jsx";
import AboutMe from "./src/routes/AboutMeScreen.jsx";
import NotFound from "./src/routes/404NotFound.jsx";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
