



const expensesDefaultState = [];
export default (state = expensesDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            const id = action.id;
         //   console.log(action)
        //    console.log(`removing epense with id  of ${id}`);
            return state.filter((expense)=>expense.id!==id);

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
               // console.log(`expense id in loop is ${expense.id} -- looking for ${action.id}`)
                if(expense.id==action.id){
        //            console.log(action.updates)
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                  //  console.log(`expense reducer did not find a matching id`)
                    return expense;
                }
            });

        default :
            return state;
    }
};