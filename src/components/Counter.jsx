import React, { Component } from 'react'

export default class Counter extends Component {
    state = { number: 0};
    increment = () => {
        console.log("inc");
        this.setState({ number: this.state.number + 1 });
    };
  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.increment}>++</button>
      </>
    );
  }
}
