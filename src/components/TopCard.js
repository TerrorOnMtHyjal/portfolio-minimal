import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: red;
  background-color: green;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  height: 100%;
  background-color: black;
`;

class TopCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <h1>Jared Mohney</h1>
          <h3>Is tired of this shit</h3>
          <p>Longmont, CO</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>stuff</li>
            <li>wizards</li>
          </ul>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;