import React, { Component } from 'react';
import styled from 'styled-components';

var Waypoint = require('react-waypoint');

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.primary2};
  font-size: 3em;
  color: white;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  @media screen and (min-width: 950px){
    width: 70%;
  }
  
  @media screen and (min-width: 1366px){
    width: 50%;
  }
`;

const SocialLink = styled.a`
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  position: relative;
  top: 1em;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease-out;
  transition-delay: ${props => props.delay};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView && 'translateY(-1em)'};

  &:hover {
    color: black;
  }
`;

const Carlton = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scale(0.1);
  transform-origin: 100% 100%;
`;

class SocialCard extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      stackInView : false
    };

    this.handleEnter = this.handleEnter.bind(this);
  }
  
  handleEnter(){
    this.setState({
      stackInView : true
    });
  }

  render() {
    return (
      <Wrap>
        <Waypoint 
          scrollableAncestor={ window } 
          bottomOffset="10%" 
          onEnter={ this.state.stackInView ? undefined : () => this.handleEnter() }
        >
          <InnerWrap>

            <SocialLink 
              href="http://www.github.com/dustwise" 
              target="_blank" 
              rel="noopener noreferrer" 
              delay="0.2s"
              inView={ this.state.stackInView }
            >
              <i className="fa fa-github" aria-hidden="true"/>
            </SocialLink>

            <SocialLink 
              href="http://www.linkedin.com/in/jaredmohney" 
              target="_blank" 
              rel="noopener noreferrer" 
              delay="0.4s"
              inView={ this.state.stackInView }
            >
              <i className="fa fa-linkedin" aria-hidden="true"/>
            </SocialLink>

            <SocialLink 
              href="mailto:jared.mohney@gmail.com?Subject=Hello%20Jared" 
              target="_blank" 
              rel="noopener noreferrer" 
              delay="0.6s"
              inView={ this.state.stackInView }
            >
              <i className="fa fa-envelope" aria-hidden="true"/>
            </SocialLink>

          </InnerWrap>
        </Waypoint>
        <Carlton src={require('../images/carlton.gif')} />
      </Wrap>
    );
  }
}

export default SocialCard;