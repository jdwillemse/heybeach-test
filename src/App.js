import React, { Component } from 'react';

import './App.css';
import Header from './containers/Header';
import Form from './containers/Form';
import BeachList from './containers/BeachList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <BeachList />
      </div>
    );
  }
}

export default App;
