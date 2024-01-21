function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      key={project.title}
      className="project-card"
      target="_blank"
    >
      <div className="image-container">
        <img src={project.image} alt="project image" />
        <div className="overlay-text">{project.title}</div>
      </div>
    </a>
  );
}

export default ProjectCard;
