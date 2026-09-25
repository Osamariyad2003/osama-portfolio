import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const liveUrl = project.demo || project.video;

  return (
    <div className="project-card">
      <div className="project-card__top">
        <svg
          className="project-card__folder"
          width="34"
          height="28"
          viewBox="0 0 24 20"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M22 20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6.24a2 2 0 0 1 1.46.62l1.82 1.92a1 1 0 0 0 .73.31H22a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2Z"
          />
        </svg>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} source on GitHub`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="external"
              aria-label={`${project.name} live link`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">
        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
      </h3>

      <p className="project-card__description">{project.tagline}</p>

      <ul className="mono project-card__stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
