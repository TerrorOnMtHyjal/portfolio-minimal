import React, { Component } from 'react';
import styled from 'styled-components';

import TopCard from './components/TopCard';
import Projects from './components/Projects';
import SocialCard from './components/SocialCard';

/*
#fc4445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;

  @media screen and (min-width: 1024px){
    font-size: 1.25rem;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <TopCard/>
        <Projects/>
        <SocialCard/>
      </Wrap>
    );
  }
}

export default App;
