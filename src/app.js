import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selecters/expenses'
import 'react-dates/lib/css/_datepicker.css'


const store =configureStore;
// store.dispatch(addExpense({description:'water bill',amount:2500,createdAt:700}))
// store.dispatch(addExpense({description:'gas bill',amount:150,createdAt:800}));
// store.dispatch(addExpense({description:'Rent',amount:109500,createdAt:1000}));
//
//
// const state = store.getState();
// const filteredExpenses = getVisibleExpenses(state.expenses,state.filters);
//console.log(filteredExpenses);


//console.log(store.getState())

const jsx= (
 <Provider store={store}>
     <AppRouter />
 </Provider>
)

ReactDOM.render(jsx , document.getElementById("app"))

