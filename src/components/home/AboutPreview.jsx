import { Link } from "react-router-dom";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="section about-preview">
      <p className="eyebrow">About</p>

      <p className="about-preview__lede">
        I build production software and machine learning tooling, based in Amman, Jordan.
      </p>

      <p className="about-preview__body">
        Computer Engineering graduate from Jordan University of Science and Technology, most
        recently an Odoo development intern at Leading Point Software — building agentic systems
        and full-stack tools on the side.
      </p>

      <Link className="about-preview__more" to="/about">
        More about me <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export default AboutPreview;
