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
  background-color: green;
`;

class ProjectLinks extends Component {
  render() {
    return (
      <Wrap>
        <Button href={this.props.links.github} target="_blank" rel="noopener noreferrer">
          Github
        </Button>
        <Button href={this.props.links.live} target="_blank" rel="noopener noreferrer">
          Live
        </Button>
      </Wrap>
    );
  }
}

export default ProjectLinks;