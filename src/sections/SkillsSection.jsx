import { useState } from "react";

const skills = [
  {
    id: "html",
    title: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Lenguaje de marcado para estructurar contenido web semántico y accesible.",
  },
  {
    id: "css",
    title: "CSS / SCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "Estilos avanzados, layouts responsive, animaciones y preprocesado con SCSS.",
  },
  {
    id: "js",
    title: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Lenguaje principal para lógica frontend y backend, asincronía y manipulación del DOM.",
  },
  {
    id: "mysql",
    title: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "Base de datos relacional para datos estructurados y consultas SQL complejas.",
  },
  {
    id: "mongodb",
    title: "MongoDB & Mongoose",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "Base de datos NoSQL orientada a documentos y modelado con Mongoose.",
  },
  {
    id: "node",
    title: "Node.js & Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Backend con APIs REST, autenticación JWT y arquitectura MVC.",
  },
  {
    id: "react",
    title: "React & Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Frontend moderno con componentes, hooks, estado global y SPA.",
  },
];

const SkillsSection = () => {
  const [openSkill, setOpenSkill] = useState(null);

  return (
    <div className="glass-card section-card">
      <h2>- Tecnologias conocidas -</h2>
      <hr />
      <br />

      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-item"
          onClick={() =>
            setOpenSkill(openSkill === skill.id ? null : skill.id)
          }
          style={{ cursor: "pointer", marginBottom: "15px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img src={skill.logo} alt={skill.title} width="70" />
            <strong>{skill.title}</strong>
          </div>

          {openSkill === skill.id && (
            <p className="TextTech" style={{ marginTop: "10px" }}>{skill.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
