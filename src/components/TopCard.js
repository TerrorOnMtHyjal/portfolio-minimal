import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectStack from './ProjectStack';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #1a1a1d;
  background-color: ${props => props.theme.primary};
  font-size: 1em;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  width: 95%;

  // @media screen and (min-width: 1024px){
  //   width: 80%;
  // }
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  width: 100%;
  text-align: right;

  & > h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  & > h3 {
    font-size: 1.25em;
    margin: 0;
    padding: 0;
    margin-top: -0.3em;
    margin-bottom: 0.4em;
    color: white;
  }

  & > p {
    font-size: 1em;
    color: white;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px){
    & > h1 {
      font-size: 5em;
    }

    & > h3 {
      font-size: 2.5em;
    }

    & > p {
      font-size: 2em;
    }
  }
`;

// const Links = styled.div`
//   display: flex;

//   & > a {
//     color: inherit;
//     text-decoration: none;
//     font-size: 2.5em;
//     padding-left: 0.5em;
//   }
// `;

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
          {/*<Links>
            <a href="http://www.github.com/dustwise" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true"/>
            </a>

            <a href="http://www.linkedin.com/in/jaredmohney" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"/>
            </a>
          </Links>*/}
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;