
import { Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { useContextGlobal } from '../Utils/global.context';
import './WorkSamples.css';

const projects = [
  { id: 1, src: '/images/Group-30.png', alt: 'Imagen 1', projectName: 'PRESSKIT DJ' },
  { id: 2, src: '/images/Group-31.png', alt: 'Imagen 2', projectName: 'IDENTIDAD VISUAL'},
  { id: 3, src: '/images/Group-32.png', alt: 'Imagen 3', projectName: 'DESING THINKING' },
  { id: 4, src: '/images/Group-33.png', alt: 'Imagen 4', projectName: 'PRESSKIT DJ' }
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

  return (
    <div className={state.theme ? "light-background" : "dark-background"}>
      <Grid container spacing={2} padding={15}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} key={project.id}>
            <div
              className="image-container"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.src} alt={project.alt} style={{ maxWidth: '100%' }} />
              {hoveredProject === project.id && (
                <Paper elevation={3} className="project-box">
                  {project.projectName}
                </Paper>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WorkSamples;










