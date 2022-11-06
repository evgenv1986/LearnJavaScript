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

  render() {
    return (
      <div className="Clicker">
        <button onClick={this.handleIncrement}>{this.state.count}</button>
      </div>
    );
  }
}

export { Clicker };
