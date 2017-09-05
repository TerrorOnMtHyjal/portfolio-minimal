import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import { projectsData } from '../lib/projectsData';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;

  transform-origin: 0 0;
  top: -6vw;

  width: 100%;
  padding: 10vh 0;
  
  clip-path: polygon(
    0 0,
    100% 6vw,
    100% calc(100% - 6vw),
    0 100%
  );

  background-color: white;
  
  transform: translateZ(0) scale(1);

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  z-index: 3;
`;

class Projects extends Component {

  generateProjects(projects){
    return projects.map((project, index) => {
      return <ProjectCard key={ "project" + index } data={ project }/>
    });
  }

  render() {
    return (
      <Wrap>
        {this.generateProjects(projectsData)}
      </Wrap>
    );
  }
}

export default Projects;