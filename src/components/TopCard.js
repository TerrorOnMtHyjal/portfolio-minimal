import React, { Component } from 'react';
import styled from 'styled-components';

/*
#fc4445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #1a1a1d;
  background-color: #fc4445;
  font-size: 1em;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 95%;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10%;

  & > h1 {
    font-size: 10vw;
    margin: 0;
    padding: 0;
  }

  & > h3 {
    font-size: 6vw;
    margin: 0;
    padding: 0;
    margin-top: -0.4em;
    margin-bottom: 0.4em;
    color: white;
  }

  & > p {
    font-size: 5vw;
    color: white;
    margin: 0;
    padding: 0;
  }
`;

const SkillsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
`;

const Skill = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5em 0.5em 0 0.5em;
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
            <Skill>Passport</Skill>
          </SkillsList>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;