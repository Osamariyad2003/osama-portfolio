import PROJECTS from "../data/projects.json";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  return (
    <div className="page projects-page">
      <p className="eyebrow">All Projects</p>

      <div className="projects-page__grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
