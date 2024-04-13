import { useState } from "react";
import { useContextGlobal } from "../Utils/global.context";
import { Link } from "react-router-dom";
import "./WorkSamples.css";

const projects = [
  {
    id: 1,
    src: "/images/Group-30.png",
    alt: "Imagen 1",
    projectName: "PRESSKIT DJ",
  },
  {
    id: 2,
    src: "/images/Group-31.png",
    alt: "Imagen 2",
    projectName: "IDENTIDAD VISUAL",
  },
  {
    id: 3,
    src: "/images/Group-32.png",
    alt: "Imagen 3",
    projectName: "DESING THINKING",
  },
  {
    id: 4,
    src: "/images/Group-33.png",
    alt: "Imagen 4",
    projectName: "PRESSKIT DJ",
  },
];

const WorkSamples = () => {
  const { state } = useContextGlobal();
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Lleva al usuario al principio de la página
  };

  return (
    <div
      className={
        state.theme
          ? "work-samples light-background"
          : "work-samples dark-background"
      }
    >
      <div className="grid-container">
        {projects.map((project) => (
          <div
            className="project-container"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.src} alt={project.alt} />
            {hoveredProject === project.id && (
              <Link 
                to={`/detalle/${project.id}`}
                className="project-box"
                onClick={handleLinkClick} // Agregar onClick aquí
              >
                {project.projectName}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSamples;
