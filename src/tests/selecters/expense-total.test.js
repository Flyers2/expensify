import {getTotal} from '../../selecters/expenses-total'

import expenses from '../fixtures/expenses';


test("should return 0 w/o expenses",()=>{
    const total = getTotal([]); 
    expect(total).toBe(0);
})

test("should return 109500 from all expenses expenses",()=>{
    const oneExpense = [expenses[1]]
    const total = getTotal(oneExpense);
    expect(total).toBe(109500);
})
test("should return 114,195 from all expenses expenses",()=>{
    const total = getTotal(expenses);
    expect(total).toBe(114195);
})