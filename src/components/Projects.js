import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import { projectsData } from '../lib/projectsData';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;

  &::before {
    position: absolute;
    content: '';
    width: 120vw;
    height: 25vh;
    transform: rotateZ(6deg);
    transform-origin: 100% 0;
    background-color: white;
    z-index: 2;
  }

  & > div {
    z-index: 3;
  }
`;

class Projects extends Component {

  generateProjects(projects){
    return projects.map((project, index) => {
      return <ProjectCard key={ "project" + index }data={ project }/>
    })
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