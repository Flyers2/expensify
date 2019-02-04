import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const temp = {a:1,b:2};


const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            const id = action.id;
            console.log(`removing epense with id  of ${id}`);
            return state.filter((expense)=>expense.id!==id);

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id==action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });

        default :
            return state;
    }
};






const addExpense = ({
                        description = '',
                        note = '',
                        amount = 0,
                        createdAt = 0,
                        endDate=0
                    } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
        endDate
    }
});
const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }

};
const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});


const filtersDefaultState = {text: '', sortBy: 'date', startDate:undefined, endDate:undefined};
const filtersReducer = (state = filtersDefaultState, action) => {


    switch (action.type) {

        case 'SET_TEXT':
         //   console.log(`setting text filter ${action.text}`)
            return {...state,text:action.text};

        case 'SORT_BY_AMOUNT':
            return {...state,sortBy:'amount'};
        case 'SORT_BY_DATE':
            return {...state,sortBy:'date'};

        case 'SET_START_DATE':
            return({...state,startDate:action.startDate});
        case 'SET_END_DATE':
            return({...state,endDate:action.endDate});

        default:
            return state;
    }
};

const getVisibileExpenses=(expenses,{text,sortBy,startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number'|| expense.createdAt>= startDate;
        const endDateMatch = typeof endDate!=='number'|| expense.endDate<=endDate;
        const textMatch = typeof text!=='string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch &&  textMatch;
    }).sort((expense1,expense2,)=>{

        if(sortBy==='date'){
            return expense1.createdAt< expense2.createdAt?1:-1;
        }if(sortBy==='amount'){
            return expense1.amount>expense2.amount?-1:1;
        }
    });
}

const setTextFilter=(text='')=>({
    type:'SET_TEXT',
    text
});
const setStartDate=(startDate=undefined)=>({
    type:"SET_START_DATE",
    startDate
});
const setEndDate=(endDate=undefined)=>({
    type:"SET_END_DATE",
    endDate
});

const sortByAmount=()=>({type:'SORT_BY_AMOUNT'});
const sortByDate=()=>({type:'SORT_BY_DATE'});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibileExpenses(state.expenses,state.filters);
        console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({description: 'Rent', amount: 1000, note: "this is rent",createdAt:1000,endDate:15000}));
const exp2 = store.dispatch(addExpense({description: 'coffee', amount: 300, note: "this is yum",createdAt:-1000}));
const exp3 = store.dispatch(addExpense({description: 'insurance', amount: 400, note: "this is sad",createdAt:2000}));

// const exp3_id = exp3.expense.id;
// store.dispatch(removeExpense(exp3_id));
//
//
// store.dispatch(editExpense(exp2.expense.id,{amount:500}));
//
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(1250));
// store.dispatch(setEndDate(2));
// store.dispatch(setEndDate());
//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

const demoState = {
    expenses: [
        {
            id: 'safdsafl',
            description: "January Rent",
            note: "this was rent for Jan",
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
};

