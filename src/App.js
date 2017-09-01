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
  highlight: 'white',
  text: 'white',
  highlightText: 'white'
};

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  background-color: #3feee6;

  @media screen and (min-width: 1024px){
    font-size: 1.25rem;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrap>
          <TopCard/>
          <Projects/>
          <SocialCard/>
        </Wrap>
      </ThemeProvider>
    );
  }
}

export default App;
