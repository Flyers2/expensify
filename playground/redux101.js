import {createStore} from 'redux';


//if no object exists from call then make one-- if no incrementBy is on the object then make it and default it to one
const incrementCount = ({incrementBy = 1} = {}) => {

    return {
        // incrementBy : typeof payload.incrementBy==='number'? payload.incrementBy:1,
        incrementBy,
        type: "INCREMENT"
    }
}
const decrementCount = ({decrementBy = 1} = {}) => ({
    decrementBy,
    type: 'DECREMENT'
});

const setCount = ({count}) => ({
    count,
    type: "SET"
});
const resetCount = () => ({
    type: "RESET"
})

const countReducer = (state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            //      const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1
            return ({count: state.count + action.incrementBy});
        case 'DECREMENT':
            //    const decrementBy = typeof action.decrementBy==='number'?action.decrementBy:1

            return ({count: state.count - action.decrementBy});
        case 'RESET':
            return ({count: 0});
        case 'SET':
            return ({count: action.count});
        default:
            return state;
    }

};
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch(
//     {
//         type:"INCREMENT",
//         incrementBy:3
//     }
// );
store.dispatch(incrementCount({incrementBy: 5}));
//unsubscribe();
store.dispatch(
    incrementCount()
);

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount(11));
store.dispatch(setCount({count: 77}));

