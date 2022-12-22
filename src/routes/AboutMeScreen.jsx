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
            My name is Ramon and I'm 15 years old. I'm a programming enthusiast
            and I love to write code. I'm an avid gamer and I'm a big fan of
            animes and doramas. I spend my free time playing video games and
            watching my favorite anime series. I'm also interested in learning
            new things and technologies, such as NextJS and Typescript. I like
            to stay up-to-date on the latest trends in technology, so I'm always
            looking for ways to improve my current skills. If you wanna talk
            with me, send a dm! :D
          </p>
        </section>

        <section className="LoveThis">
          <h1 className="aboutMeTitle">Things that i love &hearts;</h1>
          <ul className="listLove">
            <li className="loveItem">code</li>
            <li className="loveItem">valorant</li>
            <li className="loveItem">genshin impact</li>
            <li className="loveItem">osu</li>
            <li className="loveItem">music</li>
            <li className="loveItem">animes</li>
            <li className="loveItem">doramas</li>
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
