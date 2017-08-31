import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #1a1a1d;
  background-color: #fc4445;
  font-size: 1em;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 calc(100% - 6vw)
  );
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 95%;

  @media screen and (min-width: 1024px){
    width: 80%;
  }
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

  @media screen and (min-width: 1024px){
    & > h1 {
      font-size: 3em;
    }

    & > h3 {
      font-size: 1.5em;
    }

    & > p {
      font-size: 1em;
    }
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  list-style-type: none;
  color: white;
  margin-top: 5vh;
`;

const Skill = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin: 0;
  background-color: #1a1a1d;
`;

class TopCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <TopInfo>
            <h1>JARED MOHNEY</h1>
            <h3>Full Stack Javascript Developer</h3>
            <p>Longmont, CO</p>
          </TopInfo>
          <SkillsList>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>MongoDB</Skill>
            <Skill>PostgreSQL</Skill>
            <Skill>Node</Skill>
            <Skill>Express</Skill>
          </SkillsList>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;