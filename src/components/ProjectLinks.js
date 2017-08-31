import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 600px){
    width: 80%;
    align-self: flex-start;
  }

  @media screen and (min-width: 736px){
    width: 60%;
  }

  @media screen and (min-width: 1366px){
    width: 40%;
  }
`;

const Button = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: 1em 2em;
  margin: 1em;
  border: 2px solid #55bcc9;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  color: #55bcc9;

  @media screen and (min-width: 736px){
    margin: 0 2em 0 0;
  }
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