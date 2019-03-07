



export const getTotal = (expenses)=>{
    if(!expenses){
        return 0;
    }
   const total= expenses.reduce((sum,expense)=>{
         sum+= expense.amount;
         return sum
    },0)
    return total;
};