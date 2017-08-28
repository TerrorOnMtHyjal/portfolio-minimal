import React, { Component } from 'react';
import styled from 'styled-components';

const SkillsList = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  list-style-type: none;
  color: white;
  margin-top: 5vh;
`;

const Skill = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin: 0;
  background-color: #1a1a1d;
`;

class ProjectStack extends Component {

  generateStack(stack){
    return stack.map((skill, index) => {
      return <Skill key={skill + index}>{skill}</Skill>
    })
  }

  render() {
    return (
      <SkillsList>
        {this.generateStack(this.props.stack)}
      </SkillsList>
    );
  }
}

export default ProjectStack;