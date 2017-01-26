// VERSION 3 (code refactoring)
import React from 'react';
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

// create a Store and register the reducer
const store = createStore(CounterReducer);

const CounterX = ({
  value,
  onIncrement,
  onDecrement
}) => (
    <div>
      <h1> == {value} == </h1>
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>  
    </div>
);

const App = () => (
  <CounterX 
      value={store.getState()}
      onIncrement= {() => {store.dispatch({type:INCREMENT})}}
      onDecrement={() => {store.dispatch({type:DECREMENT})}}
  />
  );

export const render = () => {
ReactDOM.render(
  <App  />,
  document.getElementById('root')
  );
}

// subscribe function to execute when state changes
store.subscribe(render);

