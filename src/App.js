import React, { Component } from 'react';

import './App.css';
import Header from './containers/Header';
import BeachList from './containers/BeachList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BeachList />
      </div>
    );
  }
}

export default App;
