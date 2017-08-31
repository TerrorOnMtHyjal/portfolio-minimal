import React, { Component } from 'react';
import styled from 'styled-components';

import TopCard from './components/TopCard';
import Projects from './components/Projects';
import SocialCard from './components/SocialCard';

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  font-family: 'Raleway', sans-serif;
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
