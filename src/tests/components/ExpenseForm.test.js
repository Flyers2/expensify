import React from 'react'
import ExpenseForm from '../../components/ExpenseForm';
import {shallow}from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment'


test('should render ExpenseForm component',()=>{

    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot();


});



test('should render expenseform with data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should submit expenseform and give error msg for required data',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{
        preventDefault(){}
    });
//    console.log(wrapper.state('error'))
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test('should set state of description on input change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{target:{value:'new val'}});
    expect(wrapper.state('description')).toBe('new val');
});

test('should set state on note change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{target:{value:"new note value here"}});
    expect(wrapper.state('note')).toBe("new note value here");
});

test('should set amount on valid change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const newval = '22.11';
    wrapper.find('input').at(1).simulate('change',{target:{value:newval}});
    expect(wrapper.state('amount')).toBe(newval);
});

test('should not set amount on invalid change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const oldAmount = wrapper.state('amount')
    const newval = 'a22.111';
    wrapper.find('input').at(1).simulate('change',{target:{value:newval}});
    expect(wrapper.state('amount')).toBe(oldAmount);
});

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const ex = expenses[0]
    const wrapper  = shallow(<ExpenseForm expense={ex} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description:ex.description,
        note:ex.note,
        amount:ex.amount,
        createdAt:ex.createdAt
    })
});

test('test should set new date on change date',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect (wrapper.state('createdAt')).toEqual(now)
});

test('should set calender focus on change',()=>{
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calenderFocused')).toBe(true);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:false});
    expect(wrapper.state('calenderFocused')).toBe(false);

})