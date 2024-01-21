import { projects } from "../assets/project-data";
import ProjectCard from "./ProjectCard";

function Projects(params) {
  return (
    <section id="projects">
      <h2>Recent Projects</h2>
      <section id="project-cards">
        {projects.map((project) => {
          return (
            <article key={project.title}>
              <ProjectCard project={project} />
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
