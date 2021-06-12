import { Component } from 'react';
import classes from './Counter.module.css';
import { connect } from 'react-redux';

class CounterClassBased extends Component {
    incrementCounter() {
        this.props.increment();
    }

    decrementCounter() {
        this.props.decrement();
    }

    toggleCounterHandler() {

    }

    render() {
        return (
            <main className={classes.counter}>
              <h1>Redux Counter</h1>
              <div className={classes.value}>{this.props.counter}</div>
              <div>
                <button onClick={this.incrementCounter.bind(this)}>Increment</button>
                <button onClick={this.decrementCounter.bind(this)}>Decrement</button>
              </div>
              <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
          );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBased);