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

  ${props => props.bordered && `
    padding-left: 1em;
    margin-bottom: 4em;
    border-left: 0.2em solid ${props.theme.primary};
  `}
  
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
      margin: 0.15em 0;
      padding: 0;

      font-family: 'Roboto Slab', serif;
      font-size: 3em;
      line-height: 1em;
      font-weight: 700;
    }

    & > h3 {
      margin: 0;
      padding: 0;

      font-size: 1.5em;
      font-weight: 400;
    }
  }
`;

const TitleW = styled.div`
  display: flex;
  align-items: center;

  & > h2 {
    margin: 0.15em 0;
    padding: 0;

    font-family: 'Roboto Slab', serif;
    font-size: 3em;
    line-height: 1em;
    font-weight: 700;
  }
`;

const RefactorTag = styled.span`
  background-color: yellow;
  padding: 0.25em 0.5em;
`;

class ProjectCard extends Component {

  render() {
    const { backgroundColor, title, tagline, images, stack, links, features, refactoring } = this.props.data;
    console.log(refactoring)
    return (
      <Wrap>

        <InnerWrap bordered>
          <TopInfo>
            <div>
              {refactoring && <RefactorTag>Refactoring</RefactorTag>}
              <h2>{ title }</h2>
              <h3>{ tagline }</h3>
            </div>
          </TopInfo>
          <ProjectStack stack={ stack }/>
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