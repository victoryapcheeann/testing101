import React, { Component } from 'react';
import './App.css';
import ClickCounter from './ClickCounter/ClickCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
      </div>
    );
  }
}

export default App;
