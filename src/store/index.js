import { createStore } from "redux";

import { INCREMENT, DECREMENT, INCREMENT_BY_FIVE } from "../Constants";

const counterReducer = (state, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === INCREMENT_BY_FIVE) {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  } else {
    return state;
  }
};

const store = createStore(counterReducer, {
  counter: 0,
  showCounter: true,
});

export default store;

// const subscriberFunction = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(subscriberFunction);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});
