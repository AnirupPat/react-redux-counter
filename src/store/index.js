// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import { INCREMENT, DECREMENT, INCREMENT_BY_FIVE, TOGGLE } from "../Constants";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
         increment(state) {
            state.counter++;
         },
         decrement(state) {
             state.counter--;
         },
        increase(state, action) {
            state.counter = state.counter +action.payload.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === DECREMENT) {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === INCREMENT_BY_FIVE) {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === TOGGLE) {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   } else {
//     return state;
//   }
// };

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
