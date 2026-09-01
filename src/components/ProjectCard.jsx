import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      <span className="mono project-card__index">{index}</span>
      <h3 className="project-card__name">
        {project.name}
        <span className="project-card__arrow" aria-hidden="true">
          →
        </span>
      </h3>
      <p className="project-card__description">{project.tagline}</p>
      <p className="mono project-card__stack">{project.stack.join(" · ")}</p>
    </Link>
  );
}

export default ProjectCard;
