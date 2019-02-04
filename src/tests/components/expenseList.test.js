import React from 'react'

import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseList} from "../../components/ExpenseList";

test('should render expesnselist component',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render empty message for expenselist',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
});

