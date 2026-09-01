import { EXPERIENCE, EDUCATION } from "../../data/experience.js";
import "./ExperienceEducation.css";

function TimelineRow({ item }) {
  return (
    <li className="timeline-row">
      <p className="mono timeline-row__date">{item.date}</p>
      <span className="timeline-row__marker" aria-hidden="true" />
      <div className="timeline-row__details">
        <h3 className="timeline-row__title">{item.title}</h3>
        <p className="timeline-row__org">{item.org}</p>
        <p className="timeline-row__description">{item.description}</p>
        <ul className="timeline-row__tags">
          {item.tags.map((tag) => (
            <li key={tag} className="mono">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function ExperienceEducation() {
  return (
    <section className="section experience-education">
      <p className="eyebrow">Experience / Education</p>

      <p className="mono timeline-subhead">Experience</p>
      <ul className="timeline-list">
        {EXPERIENCE.map((item) => (
          <TimelineRow item={item} key={item.title} />
        ))}
      </ul>

      <p className="mono timeline-subhead timeline-subhead--spaced">Education</p>
      <ul className="timeline-list">
        {EDUCATION.map((item) => (
          <TimelineRow item={item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}

export default ExperienceEducation;
