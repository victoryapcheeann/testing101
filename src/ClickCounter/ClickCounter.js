import React, { Component } from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  
  render() {
    return (
      <div data-test="component-app">
        {/*data-test: let people this attribute is for testing*/}
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment button</button>
      </div>
    );
  }
}

export default ClickCounter;
