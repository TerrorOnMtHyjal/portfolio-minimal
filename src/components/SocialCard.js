import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ff00ae;
  font-size: 3em;
  color: white;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  & > i {
    transition: all 0.25s ease-in-out;
    
    &:hover {
      color: black;
      transform: scale(1.1);
    }
  }
`;

class SocialCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <i className="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default SocialCard;