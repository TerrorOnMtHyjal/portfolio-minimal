import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;

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

const Button = styled.div`
  flex-basis: 0;
  flex-grow: 1;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1em;
  padding: 1em 0;

  font-family: 'Roboto Slab', serif;
  color: ${props => props.theme.accent};
  border: 2px solid ${props => props.theme.accent};
  transition: all 0.25s ease-out;
  cursor: pointer;

  & > span {
    transition: all 0.25s ease-out;
  }

  &::after {
    position: absolute;
    content: '';
    background-color: ${props => props.theme.accent};
    left: 0;
    bottom: -0.1em;
    height: 0.2em;
    width: 0%;
    transition: all 0.25s ease-out;
  }

  &:hover {
    border: 2px solid transparent;
    color: ${props => props.theme.primary};

    & > span {
      transform: translateY(-0.25em);
    }

    &::after {
      width: 100%;
      background-color: ${props => props.theme.primary};
    }
  }   
`;



class ProjectLinks extends Component {
  render() {
    return (
      <Wrap>
        <Button>
          <span>GITHUB</span>
        </Button>
        <Button>
          <span>LIVE</span>
        </Button>
      </Wrap>
    );
  }
}

export default ProjectLinks;