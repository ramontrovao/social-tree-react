import React from "react";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import "../styles/HomeScreen/global.scss";

export const Home = () => {
  return (
    <div className="container">
      <Main />
      <Footer />
    </div>
  );
};
