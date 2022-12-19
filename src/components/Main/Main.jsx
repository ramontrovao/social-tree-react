import { Link } from "react-router-dom";
import "../../styles/mainStyles/main.scss";
import Anchor from "../utility/Anchors.jsx";
import profileicon from "../../assets/profileicon.png";

const Main = () => {
  return (
    <main className="main">
      <img
        src={profileicon}
        alt="Arte feita por Sara Rodrigues"
        className="profileIcon"
      />

      <section className="homeAnchors">
        <Anchor link="https://github.com/ramontrovao" content="Github" />
        <Anchor link="https://twitter.com/hiroowsz" content="Twitter" />
        <Anchor
          link="https://www.instagram.com/ramonpxz/"
          content="Instagram"
        />
        <Link to="/aboutme" className="homeAnchor">
          Sobre mim
        </Link>
      </section>
    </main>
  );
};

export default Main;
