const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="tech-list">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
