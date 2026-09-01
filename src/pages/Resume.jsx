import { EXPERIENCE, EDUCATION } from "../data/experience.js";
import SKILLS from "../data/skills.js";
import "./Resume.css";

function Resume() {
  return (
    <div className="page resume-page">
      <div className="resume-page__header">
        <p className="eyebrow">Resume</p>
        <a
          className="mono resume-page__download"
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
        >
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </div>
      <p className="resume-page__note">
        PDF not uploaded yet — drop a <code>resume.pdf</code> into <code>/public</code> and this
        link will work as-is.
      </p>

      <div className="resume-page__block">
        <p className="mono resume-page__heading">Experience</p>
        <ul className="resume-page__list">
          {EXPERIENCE.map((item) => (
            <li key={item.title} className="resume-page__entry">
              <div className="resume-page__entry-head">
                <h3>{item.title}</h3>
                <p className="mono">{item.date}</p>
              </div>
              <p className="resume-page__entry-org">{item.org}</p>
              <p className="resume-page__entry-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="resume-page__block">
        <p className="mono resume-page__heading">Education</p>
        <ul className="resume-page__list">
          {EDUCATION.map((item) => (
            <li key={item.title} className="resume-page__entry">
              <div className="resume-page__entry-head">
                <h3>{item.title}</h3>
                <p className="mono">{item.date}</p>
              </div>
              <p className="resume-page__entry-org">{item.org}</p>
              <p className="resume-page__entry-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="resume-page__block">
        <p className="mono resume-page__heading">Skills</p>
        <div className="resume-page__skills">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="mono resume-page__skill-category">{group.category}</p>
              <p className="resume-page__skill-items">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
