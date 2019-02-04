import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should set up remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('should set up editExpense action object', () => {
    const action = editExpense('123', {note: 'some updated here'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123",
        updates: {note: 'some updated here'}
    })

});

test('should set up add action expense object', function testAddExpense() {

    const expenseData =
        {

            description: 'food',
            note: 'eat out',
            amount: 2000,
            createdAt: 8000,

        }


    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }

    })
});

test('should set up action expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
            expense: {
                id: expect.any(String),
                description:"",
                note: "",
                amount: 0,
                createdAt: 0,
            },
            type: 'ADD_EXPENSE'

        }
    )
});