import React, { Component } from 'react';
import styled from 'styled-components';

var Waypoint = require('react-waypoint');

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style-type: none;

  color: white;
`;

const Skill = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  top: -1em;
  padding: 0.25em 0.5em;
  margin-bottom: 0.5em;
  margin-right: 1em;

  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);

  font-size: 1em;
  background-color: #1a1a1d;

  transition: all 0.4s ease-out;
  transition-delay: ${props => props.delay};

  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView && 'translateY(1em)'};
`;

const FillerSkill = styled.li`
  width: 20%;
  height: 0;
`;

class ProjectStack extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      stackInView : false
    };

    this.handleEnter = this.handleEnter.bind(this);
  }
  
  handleEnter(){
    this.setState({
      stackInView : true
    });
  }

  generateStack(stack){
    let delay = 0;

    const stackArr = stack.map((skill, index) => {
      delay += 0.2;
      return <Skill key={skill + index} delay={ delay + 's' } inView={ this.state.stackInView }>{skill}</Skill>
    });

    stackArr.push(<FillerSkill key="fill1"/>, <FillerSkill key="fill2"/>, <FillerSkill key="fill3"/>, <FillerSkill key="fill4"/>);

    return stackArr;
  }

  render() {
    return (
      <Waypoint 
        bottomOffset="10%" 
        onEnter={ this.state.stackInView ? undefined : () => this.handleEnter() }
      >
        <SkillsList>
          {this.generateStack(this.props.stack)}
        </SkillsList>
      </Waypoint>
    );
  }
}

export default ProjectStack;