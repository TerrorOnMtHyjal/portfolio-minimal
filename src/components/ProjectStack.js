import React, { Component } from 'react';
import styled from 'styled-components';

const SkillsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  color: white;
`;

const Skill = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin-bottom: 0.5em;
  background-color: #1a1a1d;
`;

const FillerSkill = styled.li`
  height: 0;
  width: 30%;
`;

class ProjectStack extends Component {

  generateStack(stack){
    const stackArr = stack.map((skill, index) => {
      return <Skill key={skill + index}>{skill}</Skill>
    });

    stackArr.push(<FillerSkill key="fill1"/>, <FillerSkill key="fill2"/>, <FillerSkill key="fill3"/>, <FillerSkill key="fill4"/>);

    return stackArr;
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