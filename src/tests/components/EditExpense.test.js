import React from 'react'
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let EditExpenseSpy, ex, historyspy, wrapper,RemoveExpenseSpy;

beforeEach(() => {
    EditExpenseSpy = jest.fn();
    historyspy = {push:jest.fn()};
    ex = expenses[0];
     RemoveExpenseSpy = jest.fn();
    wrapper = shallow(<EditExpensePage
                        outerEditExpense={EditExpenseSpy}
                         history = {historyspy}
                        outerDeleteExpense={RemoveExpenseSpy}
                        expense={ex}
                        />)
});

test('should show EditExpense componenet', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense in editexpense',()=>{
    // wrapper = shallow(<EditExpensePage
    //     outerEditExpense={EditExpenseSpy}
    //      history = {push:jest.fn()}
    // />)
    wrapper.find('ExpenseForm').prop('onSubmit')(ex);
    expect(EditExpenseSpy).toHaveBeenLastCalledWith(ex.id,ex);
    expect(historyspy.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense',()=>{

    wrapper.find('.removeExpense').simulate('click');
    expect(RemoveExpenseSpy).toHaveBeenCalledWith(ex.id);
    expect(historyspy.push).toHaveBeenLastCalledWith('/');

});