import SITE from "../data/site.js";
import "./Contact.css";

function Contact() {
  return (
    <div className="page contact-page">
      <p className="eyebrow">Contact</p>

      <p className="contact-page__line">
        Have a project in mind? Reach out at{" "}
        <a className="contact-page__link" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </p>

      <ul className="contact-page__channels">
        <li>
          <span className="mono">GitHub</span>
          <a href={SITE.github} target="_blank" rel="noreferrer">
            {SITE.githubHandle}
          </a>
        </li>
        <li>
          <span className="mono">LinkedIn</span>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            {SITE.linkedinHandle}
          </a>
        </li>
        <li>
          <span className="mono">Location</span>
          <span>Amman, Jordan</span>
        </li>
      </ul>

      <p className="mono contact-page__footer">Osama Riyad · Amman, Jordan · © 2026</p>
    </div>
  );
}

export default Contact;
