import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`

`;

const Features = styled.ul`

`;

class ProjectFeatures extends Component {

  generateFeatures(features){
    return features.map((feature, index) => {
      return <li key={index}>{feature}</li>
    });
  }

  render() {
    return (
      <Wrap>
        <Features>

        </Features>
      </Wrap>
    );
  }
}

export default ProjectFeatures;