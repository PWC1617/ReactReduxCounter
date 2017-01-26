// VERSION 4 (react-redux)
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import {Provider, connect } from 'react-redux';

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
  <MyCounterX />
  );

// map dispatch to Props (which props)
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type : INCREMENT}),
  onDecrement: () => dispatch({type : DECREMENT})
});

function mapStateToProps(state) {
    return {
        value:state
    };
}

// MyCounterX Wraps CounterX giving it Bindings to a global Store
const MyCounterX = connect(mapStateToProps, mapDispatchToProps)(CounterX);

export const render = () => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
}
