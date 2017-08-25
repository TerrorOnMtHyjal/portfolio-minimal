import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #ff00ae;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  background-color: #00face;
`;

class SocialCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <p>github</p>
          <p>linkedin</p>
          <p>email</p>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default SocialCard;