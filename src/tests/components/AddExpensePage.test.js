import React from 'react'
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow}from 'enzyme';
import expenses from '../fixtures/expenses';


let onSubmit,history,wrapper;
beforeEach(()=>{
     onSubmit = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
});
test ('should render addExpensePage correctly',()=>{

    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    const ex = expenses[0];
    const onSubmit = jest.fn();
    const history = {push:jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(ex);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(ex);
})