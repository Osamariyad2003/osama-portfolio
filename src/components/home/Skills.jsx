import SKILLS from "../../data/skills.js";
import "./Skills.css";

function Skills() {
  return (
    <section className="section skills">
      <p className="eyebrow">Skills / Tech Stack</p>

      <div className="skills__grid">
        {SKILLS.map((group) => (
          <div className="skills__group" key={group.category}>
            <p className="mono skills__category">{group.category}</p>
            <ul className="skills__items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
