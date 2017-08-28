import React, { Component } from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import ProjectStack from './ProjectStack';
import ProjectLinks from './ProjectLinks';
import ProjectFeatures from './ProjectFeatures';


const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding-bottom: 7em;
  // background-color: ${props => props.color};
  z-index: 1;
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  z-index: 1000;
  background-color: white;
`;

const TopInfo = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2em;
  background-color: #3feee6;
  z-index: 1;

  & > div {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    z-index: 2;
    padding: 3em 2.5%;

    & > h2 {
      font-size: 2em;
      margin: 0;
      padding: 0;
    }

    & > h3 {
      font-size: 1em;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }
  }

  &::before {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 1200vw;
    height: 30vh;
    transform: rotateZ(6deg);
    transform-origin: 100% 50%;
    background-color: #3feee6;
    z-index: 1;
  }
`;

class ProjectCard extends Component {
  render() {
    const { backgroundColor, title, tagline, images, stack, links, features } = this.props.data;

    return (
      <Wrap color={ backgroundColor }>
        <TopInfo>
          <div>
            <h2>{ title }</h2>
            <h3>{ tagline }</h3>
          </div>
        </TopInfo>
        <InnerWrap>
          <ImageSlider images={ images } />
          <ProjectStack stack={ stack } />
          <ProjectFeatures features={ features }/>
          <ProjectLinks links={ links } />
        </InnerWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;