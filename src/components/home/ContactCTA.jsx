import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="section contact-cta">
      <p className="eyebrow">Contact</p>

      <p className="contact-cta__line">Have a project in mind? Let&apos;s talk.</p>

      <Link className="contact-cta__button" to="/contact">
        Get in touch <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export default ContactCTA;
