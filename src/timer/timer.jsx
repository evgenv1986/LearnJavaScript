import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {}
  compomentDidUpdate() {}
  componentWillUnmount() {}
}

/*
import React, { Component } from 'react';

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  compomenetDidMount() {
    console.log('compomenetDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render, count = ' + this.state.count);
    return (
      <div className="Clicker" style={{ margin: 'auto', width: '3' }}>
        <button onClick={this.handleDecrement}>-</button>
        <span style={countStyle}>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export { Clicker };

const countStyle = {
  margin: '0 0.75rem',
  display: 'inline-block',
};

*/
