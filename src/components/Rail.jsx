import { NavLink } from "react-router-dom";
import CERTIFICATIONS from "../data/certifications.js";
import SITE from "../data/site.js";
import "./Rail.css";

const NAV_ITEMS = [
  { path: "/", label: "Home", index: "01", end: true },
  { path: "/projects", label: "Projects", index: "02" },
  { path: "/about", label: "About", index: "03" },
  { path: "/resume", label: "Resume", index: "04" },
  { path: "/contact", label: "Contact", index: "05" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github },
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "Email", href: `mailto:${SITE.email}` },
];

function Rail() {
  // The Certifications tab only appears once there's at least one entry
  // in src/data/certifications.js — nothing else needs to change.
  const navItems = CERTIFICATIONS.length
    ? [...NAV_ITEMS, { path: "/certifications", label: "Certifications", index: "06" }]
    : NAV_ITEMS;

  return (
    <aside className="rail">
      <div className="rail__inner">
        <p className="mono rail__marker">PORTFOLIO / JO · 2026</p>

        <div className="rail__intro">
          <h1 className="rail__name">OSAMA RIYAD</h1>
          <p className="rail__role">Software Engineer</p>
          <p className="rail__pitch">
            I build reliable software systems and developer tools.
          </p>
        </div>

        <nav className="rail__nav" aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.end}>
                  <span className="mono rail__nav-index">{item.index}</span>
                  <span className="rail__nav-label">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rail__divider" aria-hidden="true" />

        <ul className="rail__social">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Rail;
