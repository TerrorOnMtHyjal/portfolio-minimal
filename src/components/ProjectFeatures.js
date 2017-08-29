import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-self: flex-start;

  & > h3 {
    font-size: 1.5em;
    font-family: 'Roboto Slab', serif;

    & > i {
      margin-right: 0.5em;
      color: #fc4445;
    }
  }
`;

const Features = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style-type: none;
  color: black;
  font-weight: 300;
  margin-bottom: 2em;
  font-size: 0.9em;

  & > li {
    margin-bottom: 1em;
  }

  // & > li:nth-child(even){
  //   font-weight: 500;
  // }
`;

class ProjectFeatures extends Component {

  generateFeatures(features){
    return features.map((feature, index) => {
      return <li key={index}>- {feature}</li>
    });
  }

  render() {
    return (
      <Wrap>
      <h3><i className="fa fa-cog" aria-hidden="true"></i>FEATURES</h3>
      <Features>
        {this.generateFeatures(this.props.features)}
      </Features>
      </Wrap>
    );
  }
}

export default ProjectFeatures;