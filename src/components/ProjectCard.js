import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: blue;
  border-top: 2px solid white;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  background-color: papayawhip;
`;

class ProjectCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <p>project here</p>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;