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
  padding-top: 2em;
  padding-bottom: 10vh;
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  border-left: ${props => props.bordered && "0.2em solid #fc4445"};
  padding-left: ${props => props.bordered && "1em"};
  margin-bottom: ${props => props.bordered && "4em"};

  @media screen and (min-width: 1024px){
    width: 80%;
  }

`;

const TopInfo = styled.div`
  align-self: flex-start;
  margin-bottom: 2em;

  & > div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    & > h2 {
      font-family: 'Roboto Slab', serif;
      font-size: 3em;
      font-weight: 800;
      margin: 0;
      padding: 0;
    }

    & > h3 {
      font-size: 1.5em;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }
  }
`;

class ProjectCard extends Component {
  render() {
    const { backgroundColor, title, tagline, images, stack, links, features } = this.props.data;

    return (
      <Wrap color={backgroundColor}>
        <InnerWrap bordered>
          <TopInfo>
            <div>
              <h2>{ title }</h2>
              <h3>{ tagline }</h3>
            </div>
          </TopInfo>
          <ProjectStack stack={ stack } />
        </InnerWrap>

        <ImageSlider images={ images } />

        <InnerWrap>
          <ProjectFeatures features={ features }/>
          <ProjectLinks links={ links } />
        </InnerWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;