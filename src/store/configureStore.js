

import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

//not creating function to export unlike in tutorial
export default createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
