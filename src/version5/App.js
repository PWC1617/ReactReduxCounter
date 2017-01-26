// VERSION 5 (modules, bindActionCreators)
import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import { createStore, bindActionCreators} from 'redux';
import {Provider, connect , } from 'react-redux';

import * as actionType from './constants'
import * as actions from './Actions'

// reducer
const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case actionType.INCREMENT:
            return state + 1;
        case actionType.DECREMENT:
            return state - 1;
        default :
            return state;
  }
}

// create a Store and register the reducer
const store = createStore(CounterReducer);

// the counter
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }

function mapStateToProps(state) {
    return {
        value:state
    };
}

// MyCounterX Wraps CounterX giving it Bindings to a global Store
const MyCounterX = connect(mapStateToProps, mapDispatchToProps)(CounterX);

// the App
const App = () => (
  <MyCounterX 
  />
  );

export const render = () => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
}
