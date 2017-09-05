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

      color: ${props => props.theme.primary};
    }
  }
`;

const Features = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;

  color: black;
  font-weight: 300;
  font-size: 0.9em;

  list-style-position: inside;

  & > li {
    width: 98%;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 1024px){
    margin-left: 1em;

    & > li {
      width: 100%;
    }
  }
`;

class ProjectFeatures extends Component {

  generateFeatures(features){
    return features.map((feature, index) => {
      return <li key={ index }>{ feature }</li>
    });
  }

  render() {
    return (
      <Wrap>
        <h3>
          <i className="fa fa-cog" aria-hidden="true"></i>
          FEATURES
        </h3>
        <Features>
          {this.generateFeatures(this.props.features)}
        </Features>
      </Wrap>
    );
  }
}

export default ProjectFeatures;