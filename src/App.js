import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import BeachList from './containers/BeachList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeachList />
      </div>
    );
  }
}

export default App;
