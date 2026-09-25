import { Link } from "react-router-dom";
import PROJECTS from "../../data/projects.json";
import ProjectCard from "../ProjectCard.jsx";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section className="section featured-projects">
      <p className="eyebrow">Featured Projects</p>

      <div className="featured-projects__grid">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Link className="featured-projects__more" to="/projects">
        View all projects <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export default FeaturedProjects;
