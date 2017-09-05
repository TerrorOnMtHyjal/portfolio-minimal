import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

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

const defaultTheme = {
  primary: '#fc4445',
  accent: '#55bcc9',
  primary2: '#299797'
};

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  overflow-x: hidden;

  font-family: 'Raleway', sans-serif;
  font-size: 1rem;

  background-color: ${props => props.theme.primary2};

  @media screen and (min-width: 1024px){
    font-size: 1.25rem;
  }
`;

const ParaControl = styled.div`
  width: 100%;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
  
  perspective: 2px;
  perspective-origin: 0 0;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrap>
          <ParaControl>
            <TopCard/>
            <Projects/>
            <SocialCard/>
          </ParaControl>
        </Wrap>
      </ThemeProvider>
    );
  }
}

export default App;
