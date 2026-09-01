import CERTIFICATIONS from "../data/certifications.js";
import "./Certifications.css";

function Certifications() {
  return (
    <div className="page certifications-page">
      <p className="eyebrow">Certifications</p>

      {CERTIFICATIONS.length ? (
        <ul className="certifications-page__list">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name} className="certifications-page__item">
              <div>
                <h3>{cert.name}</h3>
                <p className="certifications-page__issuer">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {cert.credentialUrl && (
                <a
                  className="mono certifications-page__link"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential <span aria-hidden="true">→</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="certifications-page__empty">
          No certifications listed yet — check back later.
        </p>
      )}
    </div>
  );
}

export default Certifications;
