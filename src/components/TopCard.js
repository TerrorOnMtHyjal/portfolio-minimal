import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  color: white;
  background-color: black;
  font-size: 1em;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
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
  padding: 1em 0.5em 0 0.5em;
`;

class TopCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <h1>Jared Mohney</h1>
          <h3>Is tired of this shit</h3>
          <p>Longmont, CO</p>
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