import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFoundStyles/notFound.scss";

export const NotFound = () => {
  return (
    <main className="notFoundMain">
      <h1 className="notFoundTitle">404 Not Found</h1>

      <p className="paragraph">
        Where are you? You are so far, please reaturn to the right way bro
      </p>
      <Link to="/" className="notFoundLink">
        Click here to go to right way!!!!!!!!!!
      </Link>
    </main>
  );
};
