import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if(action.type === 'ADD_PIZZA'){
    const thePizzaWeDispatched = action.payload;
    return [...state,thePizzaWeDispatched];
  }
  
  return state;
}

const store = createStore(
  combineReducers({
    cart, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
