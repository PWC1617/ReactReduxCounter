import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// using react component's state. 
// not using any state management libraries

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {count : 0};
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState({count : this.state.count + 1});
  }

  onDecrement() {
    this.setState({count : this.state.count - 1});
  }

  render () {
    console.log(this);
    return (
    <div>
      <h1> {this.state.count} </h1>
      <button onClick={this.onIncrement}> + </button>
      <button onClick={this.onDecrement}> - </button>
    </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

export const render = () => {
ReactDOM.render(
    <App />,
  document.getElementById('root')
  );
}

