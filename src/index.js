import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// One or more reducers
    // First argument: Previous state
    // Second argument: something called an action
// A reducer is just a function that returns a piece of state:
const count = (state = 0, action) => {
  console.log('action inside count', action);
  // if (action.type === 'INCREASE_COUNT'){
  //   return state + 1;
  // }else if (action.type === 'DECREASE_COUNT'){
  //   return state - 1;
  // }else if (action.type === 'RESET_COUNT'){
  //   return state - state;
  // }
  switch (action.type){
    case 'INCREASE_COUNT': return state + 1;
    case 'DECREASE_COUNT': return state -1;
    case 'RESET_COUNT': return state - state;
    default: return state;
  }
};

    // const [elementList, setElementList] = useState ([];)
const elementList = (state = ['Oxygen', 'Carbon', 'Hydrogen'], action) =>{
  console.log('action inside elementList', action);
  switch (action.type){
    case 'ADD_ELEMENT':
      const copyOfState = [...state];
      copyOfState.push(action.payload);
      return copyOfState;
    default: return state;
  }
}


// One Redux store
const storeInstance = createStore(
  combineReducers ({
    count,
    elementList
  }), applyMiddleware(
    logger
  )
);

// One Provider
// That <App/> has access to our redux store:

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
