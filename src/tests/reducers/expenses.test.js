import expensesReducer from '../../reducers/expenses'


import expenses from '../fixtures/expenses'


test('should set default state',()=>{
    const state = expensesReducer(undefined,"@@INIT");
    expect(state).toEqual([]);
});


test('should remove expense by id',()=>{
    const action ={type:"REMOVE_EXPENSE",id:2};
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});
test('should not remove expense by unfound id',()=>{
    const action ={type:"REMOVE_EXPENSE",id:-1};
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});

test('should add expense to state',()=>{
    const newExpense =  {
        id:5,
        description:'zoo trip',
        note:"",
        amount:10000,
    }
    const action = {type:"ADD_EXPENSE",expense:newExpense}
    const state = expensesReducer(expenses,action );
    expect(state).toEqual([...expenses,newExpense])
});

test('should edit an expense',()=>{
    const action = {type:"EDIT_EXPENSE",updates:{note:'new stuff'},id:1}
    const state = expensesReducer(expenses,action);
    expect(state[0].note).toBe("new stuff");
})

test('should not  edit an unfound expense',()=>{
    const action = {type:"EDIT_EXPENSE",updates:{note:'new stuff'},id:-1}
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses]);
});