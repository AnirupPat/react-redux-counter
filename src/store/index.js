import { createStore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }  if (action.type === "incrementBy5") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  } if(action.type === "toggle") {
    return {
        counter: state.counter,
        showCounter: !state.showCounter
    }
  }
   else {
    return state;
  }
};

const store = createStore(counterReducer, {
  counter: 0,
  showCounter: true
});

export default store;

// const subscriberFunction = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(subscriberFunction);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});
