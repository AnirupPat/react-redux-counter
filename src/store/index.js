// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counter';
import AuthReducer from './auth';
import { INCREMENT, DECREMENT, INCREMENT_BY_FIVE, TOGGLE } from "../Constants";





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
        counter: CounterReducer,
        auth: AuthReducer
    }
});




export default store;
