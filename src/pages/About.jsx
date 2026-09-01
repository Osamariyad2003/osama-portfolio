import "./About.css";

function About() {
  return (
    <div className="page about-page">
      <p className="eyebrow">About</p>

      <p className="about-page__lede">
        I build production software and developer tooling, based in Amman, Jordan.
      </p>

      <ul className="about-page__facts">
        <li>
          <span className="mono about-page__fact-label">Focus</span>
          <span>Full-stack systems &amp; developer tools</span>
        </li>
        <li>
          <span className="mono about-page__fact-label">Education</span>
          <span>B.Sc. Computer Engineering, JUST</span>
        </li>
        <li>
          <span className="mono about-page__fact-label">Based in</span>
          <span>Amman, Jordan</span>
        </li>
      </ul>

      <div className="about-page__body">
        <p>
          I recently wrapped up an Odoo development internship at Leading Point Software (May
          2026 – Aug 2026), where I worked on business application modules, integrations, and
          internal tooling used by real clients in production. Before that, I worked as a Mobile
          Software Engineer at Cellula Technologies (Sep – Dec 2024), contributing to an
          AI-enabled software product built on Clean Architecture and structured state
          management. That work has sharpened how I think about shipping software that other
          people depend on — not just demos.
        </p>
        <p>
          I graduated with a B.Sc. in Computer Engineering from Jordan University of Science and
          Technology (2021 – 2026). Alongside my studies, I&apos;ve been building agentic systems
          and full-stack tools on my own — from infrastructure drift detection to multi-agent
          production pipelines.
        </p>
        <p>
          I care about software that is well-tested, observable, and built to last past the
          first demo. I like working close to the seams: where a script becomes a tool someone
          else can rely on, where a data pipeline meets a UI, where a rough idea turns into
          something someone else can actually depend on.
        </p>
      </div>
    </div>
  );
}

export default About;
