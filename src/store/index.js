// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import { INCREMENT, DECREMENT, INCREMENT_BY_FIVE, TOGGLE } from "../Constants";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
});

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

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
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
