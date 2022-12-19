import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/aboutMeStyles/aboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <main className="aboutMeMain">
        <section className="AboutMe">
          <h1 className="aboutMeTitle">About me</h1>
          <p className="aboutMeParagraph">
            I dont have any idea I dont have any idea I dont have any idea I
            dont have any idea I dont have any idea I dont have any idea I dont
            have any idea I dont have any idea I dont have any idea I dont have
            any idea I dont have any idea I dont have any idea I dont have any
            idea I dont have any idea I dont have any idea I dont have any idea
            I dont have any idea I dont have any ideaI dont have any idea I dont
            have any idea I dont have any idea I dont have any idea I dont have
            any idea I dont have any idea I dont have any idea I dont have any
            idea I dont have any idea I dont have any idea I dont have any idea
            I dont have any idea I dont have any idea I dont have any idea I
            dont have any idea I dont have any idea
          </p>
        </section>

        <section className="LoveThis">
          <h1 className="aboutMeTitle">Things that i love &hearts;</h1>
          <ul className="listLove">
            <li className="loveItem">osu!</li>
            <li className="loveItem">valorant</li>
            <li className="loveItem">genshin impact</li>
            <li className="loveItem">coding</li>
            <li className="loveItem">listen music</li>
            <li className="loveItem">animes</li>
            <li className="loveItem">eden</li>
          </ul>
        </section>
        <Link to="/" id="goBack">
          Clique aqui para voltar para o ínicio
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default AboutMe;
