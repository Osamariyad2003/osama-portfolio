import PROJECTS from "../data/projects.json";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  return (
    <div className="page projects-page">
      <p className="eyebrow">All Projects</p>

      <div className="projects-page__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
