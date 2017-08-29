import React, { Component } from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import ProjectStack from './ProjectStack';
import ProjectLinks from './ProjectLinks';
import ProjectFeatures from './ProjectFeatures';

/*
#fc4445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/


const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding-top: 2em;
  // padding-bottom: 7em;
  // background-color: ${props => props.color};
`;

const SectionWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  z-index: 3;
  background-color: ${props => props.color};
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
`;

const TopInfo = styled.div`
  align-self: flex-start;
  padding-left: 0.5em;
  margin-bottom: 2em;
  border-left: 2px solid black;

  & > div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    & > h2 {
      font-size: 2em;
      font-weight: 800;
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
`;

class ProjectCard extends Component {
  render() {
    const { backgroundColor, title, tagline, images, stack, links, features } = this.props.data;

    return (
      <Wrap color="white">
        <SectionWrap color="white">
          <InnerWrap>

            <TopInfo>
              <div>
                <h2>{ title }</h2>
                <h3>{ tagline }</h3>
              </div>
            </TopInfo>
            <ProjectStack stack={ stack } />

          </InnerWrap>
        </SectionWrap>

        <SectionWrap color="white">
            <ImageSlider images={ images } />
          <InnerWrap>
            <ProjectFeatures features={ features }/>
            <ProjectLinks links={ links } />
          </InnerWrap>
        </SectionWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;