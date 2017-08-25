import React, { Component } from 'react';
import styled from 'styled-components';

import TopCard from './components/TopCard';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <TopCard/>
      </Wrap>
    );
  }
}

export default App;
