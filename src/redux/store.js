import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if(action.type === 'ADD_PIZZA'){
    const thePizzaWeDispatched = action.payload;
    return [...state,thePizzaWeDispatched];
  }
  if(action.type ===`REMOVE_PIZZA`){
    const pizzaToRemove = action.payload;
    console.log("Pizza to Remove: ", pizzaToRemove);
    return state.filter(item => item.id !== pizzaToRemove.id);
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
