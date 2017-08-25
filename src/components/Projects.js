import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: purple;
`;

class Projects extends Component {
  render() {
    return (
      <Wrap>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </Wrap>
    );
  }
}

export default Projects;