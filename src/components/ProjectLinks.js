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

const Button3D = styled.div`
  perspective: 7500px;
  transform-style: preserve-3d;
  transition: all 0.25s ease-out;
  flex-basis: 0;
  flex-grow: 1;
  margin-right: 2em;
  height: 70px;

  &:hover {
    transform: rotateX(-89deg);
  }
`;

const ButtonFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.accent};
  font-family: 'Roboto Slab', serif;
  height: 70px;
  font-size: 1em;
  border: 2px solid ${props => props.theme.accent};
  color: ${props => props.theme.accent};

  ${props => props.default && `
    transform: translateZ(35px);
    background-color: transparent;
  `}

  ${props => props.active && `
    transform: rotateX(90deg) translateZ(105px);
    background-color: ${props => props.theme.accent};
    color: white;
  `}
`;

class ProjectLinks extends Component {
  render() {
    return (
      <Wrap>
        {/*<Button href={this.props.links.github} target="_blank" rel="noopener noreferrer">
          <span>GITHUB</span>
        </Button>
        <Button href={this.props.links.live} target="_blank" rel="noopener noreferrer">
          <span>LIVE</span>
        </Button>*/}
        <Button3D>
          <ButtonFace default>
            <span>GITHUB</span>
          </ButtonFace>
          <ButtonFace active>
            <span>GITHUB</span>
          </ButtonFace>
        </Button3D>

        <Button3D>
          <ButtonFace default>
            <span>LIVE</span>
          </ButtonFace>
          <ButtonFace active>
            <span>LIVE</span>
          </ButtonFace>
        </Button3D>
      </Wrap>
    );
  }
}

export default ProjectLinks;