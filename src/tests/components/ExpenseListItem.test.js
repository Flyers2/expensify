import React from 'react';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses';
import {ExpenseListItem} from '../../components/ExpenseListItem';

test('should render an expenseListItem',()=>{
    const wrapper = shallow(<ExpenseListItem
                             id={expenses[0].id}
                             description = {expenses[0].description}
                             amount = {expenses[0].amount}
                            />)
    expect(wrapper).toMatchSnapshot();
})