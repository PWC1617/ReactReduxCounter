// VERSION 2
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// the reducer
// state is as simple as a number
// returns a new state. does not mutate state!!!
const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default :
            return state;
  }
}

// create a Store; register the reducer
const store = createStore(CounterReducer);

// store state injected as a prop (value)
class Counter extends Component {
  constructor (props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
     store.dispatch({type:INCREMENT});
  }

  onDecrement() {
    store.dispatch({type:DECREMENT});
  }

  render () {
    return (
    <div>
      <h1> == {store.getState()} == </h1>
      <button onClick={this.onIncrement}> + </button>
      <button onClick={this.onDecrement}> - </button>  
    </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Counter value={store.getState()} />
    )
  }
}

export const render = () => {
ReactDOM.render(
  <App />,
  document.getElementById('root')
  );
}

// subscribe render function to execute when state changes
store.subscribe(render);



