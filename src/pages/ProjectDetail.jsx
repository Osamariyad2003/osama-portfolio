import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PROJECTS from "../data/projects.json";
import "./ProjectDetail.css";

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const screenshots = project?.screenshots ?? [];
  const lightboxOpen = lightboxIndex !== null;
  const videoEmbedUrl = getYouTubeEmbedUrl(project?.video);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((i) => (i + 1) % screenshots.length);
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="page project-detail">
      <Link className="mono project-detail__back" to="/projects">
        ← All Projects
      </Link>

      <h1 className="project-detail__name">{project.name}</h1>
      <p className="project-detail__tagline">{project.tagline}</p>

      <div className="project-detail__links">
        {project.github && (
          <a
            className="mono project-detail__link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        )}
        {project.demo ? (
          <a
            className="mono project-detail__link"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo <span aria-hidden="true">→</span>
          </a>
        ) : (
          <span className="mono project-detail__link project-detail__link--disabled">
            Live Demo — not deployed
          </span>
        )}
        {project.video && (
          <a
            className="mono project-detail__link"
            href={project.video}
            target="_blank"
            rel="noreferrer"
          >
            Watch Demo <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <dl className="project-detail__sections">
        <div className="project-detail__section">
          <dt className="eyebrow">Overview</dt>
          <dd>{project.overview}</dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">Problem</dt>
          <dd>{project.problem}</dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">Architecture</dt>
          <dd>{project.architecture}</dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">Features</dt>
          <dd>
            <ul className="project-detail__list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">Tech Stack</dt>
          <dd>
            <ul className="project-detail__tags">
              {project.stack.map((tag) => (
                <li key={tag} className="mono">
                  {tag}
                </li>
              ))}
            </ul>
          </dd>
        </div>

        {videoEmbedUrl && (
          <div className="project-detail__section">
            <dt className="eyebrow">Demo Video</dt>
            <dd>
              <div className="project-detail__video">
                <iframe
                  src={videoEmbedUrl}
                  title={`${project.name} demo video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </dd>
          </div>
        )}

        <div className="project-detail__section">
          <dt className="eyebrow">Screenshots</dt>
          <dd>
            {screenshots.length ? (
              <div className="project-detail__screenshots">
                {screenshots.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className="project-detail__screenshot-btn"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`View ${project.name} screenshot ${index + 1} full size`}
                  >
                    <img src={src} alt={`${project.name} screenshot ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="project-detail__empty">Screenshots coming soon.</p>
            )}
          </dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">Challenges</dt>
          <dd>{project.challenges}</dd>
        </div>

        <div className="project-detail__section">
          <dt className="eyebrow">What I Learned</dt>
          <dd>{project.learned}</dd>
        </div>
      </dl>

      {lightboxOpen && (
        <div
          className="project-detail__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} screenshot ${lightboxIndex + 1} of ${screenshots.length}`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="project-detail__lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ×
          </button>

          {screenshots.length > 1 && (
            <button
              type="button"
              className="project-detail__lightbox-nav project-detail__lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
              }}
              aria-label="Previous screenshot"
            >
              ←
            </button>
          )}

          <img
            className="project-detail__lightbox-img"
            src={screenshots[lightboxIndex]}
            alt={`${project.name} screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {screenshots.length > 1 && (
            <button
              type="button"
              className="project-detail__lightbox-nav project-detail__lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i + 1) % screenshots.length);
              }}
              aria-label="Next screenshot"
            >
              →
            </button>
          )}

          {screenshots.length > 1 && (
            <p className="mono project-detail__lightbox-count">
              {lightboxIndex + 1} / {screenshots.length}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
