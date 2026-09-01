import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="mono hero__marker">JUNIOR SOFTWARE ENGINEER · AMMAN, JORDAN</p>
      <h1 className="hero__headline">
        Hi, I&apos;m Osama Riyad, a junior software engineer.
      </h1>
      <p className="hero__sub">
        I&apos;m a Computer Engineering graduate from Jordan University of Science and Technology,
        most recently an Odoo development intern at Leading Point Software. I like working close
        to the seams — where an LLM meets a real system, where a script becomes a tool someone
        else can rely on.
      </p>
      <div className="hero__actions">
        <Link className="hero__cta hero__cta--primary" to="/projects">
          View Projects
        </Link>
        <Link className="hero__cta" to="/contact">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Hero;
