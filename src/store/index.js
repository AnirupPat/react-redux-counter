import redux from 'redux';

const counterReducer = (state, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    } else {
        return state;
    }
    
}


const store = redux.createStore(counterReducer, {
    counter: 0
});

export default store;

// const subscriberFunction = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(subscriberFunction);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});