import React from "react";
import { Link } from "react-router-dom";
import "../../styles/mainStyles/main.scss";
import { Anchor } from "../utility/Anchors";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFillPersonFill,
} from "react-icons/bs";

export const Main = () => {
  return (
    <main className="main">
      <img
        src="./assets/profileicon.png"
        alt="Arte feita por Sara Rodrigues"
        className="profileIcon"
      />

      <section className="homeAnchors">
        <Anchor
          link="https://www.linkedin.com/in/ramon-pinheiro-230439260/"
          content={
            <>
              <BsLinkedin /> _-_ LinkedIn
            </>
          }
        />
        <Anchor
          link="https://github.com/ramontrovao"
          content={
            <>
              <BsGithub /> _-_ Github
            </>
          }
        />
        <Anchor
          link="https://www.instagram.com/ramonpxz/"
          content={
            <>
              <BsInstagram /> _-_ Instagram
            </>
          }
        />
        <Link to="/aboutme" className="homeAnchor">
          {
            <>
              <BsFillPersonFill /> _-_ About me
            </>
          }
        </Link>
      </section>
    </main>
  );
};
