import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  color: red;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
  background-color: green;
`;

class TopCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <p>test</p>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default TopCard;