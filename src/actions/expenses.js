import uuid from 'uuid'

export const addExpense = ({
                               description = '',
                               note = '',
                               amount = 0,
                               createdAt = 0,

                           } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,

    }
});
export const removeExpense = (id) => {
 //   console.log(id, 'from action\\expenses')
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }

};
export const editExpense = (id, updates) => {
 //   console.log(id,'from action editexpense')
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

};
