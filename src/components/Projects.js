import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import { projectsData } from '../lib/projectsData';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;

class Projects extends Component {

  generateProjects(projects){
    return projects.map(project => {
      return <ProjectCard data={project}/>
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