import React, { Component } from 'react';
import { Layout, Panel } from 'react-toolbox';
import Header from './Header.jsx';
import Todos from './Todos.jsx';
import theme from './App.scss';

class App extends Component {
  render() {
    return (
      <Layout theme={theme}>
        <Panel>
          <Header />
          <Todos />
        </Panel>
      </Layout>
    )
  }
}

export default App;
