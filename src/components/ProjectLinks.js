import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  width: 50%;
  padding: 1em 2em;
  margin: 1em;
  border: 2px solid green;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  color: green;
`;

class ProjectLinks extends Component {
  render() {
    return (
      <Wrap>
        <Button href={this.props.links.github} target="_blank" rel="noopener noreferrer">
          GITHUB
        </Button>
        <Button href={this.props.links.live} target="_blank" rel="noopener noreferrer">
          LIVE
        </Button>
      </Wrap>
    );
  }
}

export default ProjectLinks;