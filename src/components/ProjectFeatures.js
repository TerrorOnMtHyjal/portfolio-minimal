import React, { Component } from 'react';
import styled from 'styled-components';

const Features = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style-type: none;
  color: white;
  font-weight: 300;
  margin-bottom: 2em;

  & > li {
    margin-bottom: 1em;
  }

  & > li:nth-child(even){
    font-weight: 500;
  }
`;

class ProjectFeatures extends Component {

  generateFeatures(features){
    return features.map((feature, index) => {
      return <li key={index}>- {feature}</li>
    });
  }

  render() {
    return (
      <Features>
        {this.generateFeatures(this.props.features)}
      </Features>
    );
  }
}

export default ProjectFeatures;