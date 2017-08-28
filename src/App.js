import React, { Component } from 'react';
import styled from 'styled-components';

import TopCard from './components/TopCard';
import Projects from './components/Projects';
import SocialCard from './components/SocialCard';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  // font-family: 'Josefin Slab', serif;
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
