import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const userCount = localStorage.getItem('timer');
    console.log('userCount: ' + userCount);
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }
  componentDidUpdate() {
    console.log('compomentDidUpdate');
    localStorage.setItem('timer', this.state.count);
    console.log('this.state.count: ' + this.state.count);
  }
  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterId);
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="Timer">
        <h1>React Timer</h1>
        <h3> {this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export { Timer };
