import { Link } from "react-router-dom";
import "../../styles/mainStyles/main.scss";
import Anchor from "../utility/Anchors.jsx";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsFillPersonFill,
} from "react-icons/bs";

const Main = () => {
  return (
    <main className="main">
      <img
        src="../../../public/assets/profileicon.png"
        alt="Arte feita por Sara Rodrigues"
        className="profileIcon"
      />

      <section className="homeAnchors">
        <Anchor
          link="https://github.com/ramontrovao"
          content={
            <>
              <BsGithub /> _-_ Github
            </>
          }
        />
        <Anchor
          link="https://twitter.com/hiroowsz"
          content={
            <>
              <BsTwitter /> _-_ Twitter
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

export default Main;
