import projects from "./projects.data";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="projects-section section-animated visible">
      <h2>- Trabajos realizdos -</h2>
      <hr />
<br />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
