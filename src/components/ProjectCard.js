import React, { Component } from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import ProjectStack from './ProjectStack';
import ProjectLinks from './ProjectLinks';
import ProjectFeatures from './ProjectFeatures';


const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin-bottom: 7em;
  // background-color: ${props => props.color};
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2em;

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
`;

class ProjectCard extends Component {
  render() {
    const { backgroundColor, title, tagline, images, stack, links, features } = this.props.data;

    return (
      <Wrap color={ backgroundColor }>
        <InnerWrap>
          <TopInfo>
            <h2>{ title }</h2>
            <h3>{ tagline }</h3>
          </TopInfo>
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