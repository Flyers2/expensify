import React from 'react'
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

import {shallow} from 'enzyme'

test('should show ExpenseSummary Component with expenses',()=>{
    const wrapper = <ExpenseSummary expenses={expenses} />;
    expect (wrapper).toMatchSnapshot();
});

test('should show ExpenseSummary Component without expenses',()=>{
    const wrapper = <ExpenseSummary  />;
    expect (wrapper).toMatchSnapshot();
});