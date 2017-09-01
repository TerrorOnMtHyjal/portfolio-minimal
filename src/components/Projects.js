import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import { projectsData } from '../lib/projectsData';

const Wrap = styled.div`
  position: relative;
  display: flex;
  top: -6vw;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 10vh 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);

  clip-path: polygon(
    0 0,
    100% 6vw,
    100% calc(100% - 6vw),
    0 100%
  );
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