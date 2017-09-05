import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectStack from './ProjectStack';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  color: #1a1a1d;
  background-color: ${props => props.theme.primary};
  font-size: 1em;

  transform-origin: 0 0;
  transform: translateZ(-2px) scale(2);

  z-index: 1;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;

  width: 95%;

  z-index: 2;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  width: 100%;

  text-align: right;

  & > h1 {
    margin: 0;
    padding: 0;

    font-family: 'Roboto Slab', serif;
    font-size: 2em;
  }

  & > h3 {
    margin: 0;
    padding: 0;
    margin-top: -0.3em;
    margin-bottom: 0.4em;

    color: white;
    font-size: 1.2em;
  }

  & > p {
    margin: 0;
    padding: 0;

    color: white;
    font-size: 1em;
  }

  @media screen and (min-width: 768px){
    & > h1 {
      font-size: 4.5em;
    }

    & > h3 {
      font-size: 2.5em;
    }

    & > p {
      font-size: 2em;
    }
  }
`;

class TopCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <TopInfo>
            <h1>JARED MOHNEY</h1>
            <h3>Full Stack Javascript Developer</h3>
            <p>Boulder, CO</p>
          </TopInfo>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;