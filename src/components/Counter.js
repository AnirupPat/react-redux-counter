import { useSelector, useDispatch } from 'react-redux';
import {INCREMENT, DECREMENT, INCREMENT_BY_FIVE} from '../Constants';


import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter);

  const incrementCounter = () => {
    dispatch({type: INCREMENT});
  }

  const decrementCounter = () => {
    dispatch({type: DECREMENT});
  }

  const increaseByFiveHandler = () => {
    dispatch({type: INCREMENT_BY_FIVE,amount: 5});
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
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
