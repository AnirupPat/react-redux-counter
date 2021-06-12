import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import { INCREMENT, DECREMENT, INCREMENT_BY_FIVE, TOGGLE } from '../Constants';


import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter);

  const incrementCounter = () => {
    // dispatch({type: INCREMENT});
    dispatch(counterActions.increment());
  }

  const decrementCounter = () => {
    // dispatch({type: DECREMENT});
    dispatch(counterActions.decrement());
  }

  const increaseByFiveHandler = () => {
    // dispatch({type: INCREMENT_BY_FIVE,amount: 5});
    dispatch(counterActions.increase({amount: 5}));
  }

  const toggleCounterHandler = () => {
    // dispatch({type: TOGGLE});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={increaseByFiveHandler}>Increase by 5</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
