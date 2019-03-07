import React from 'react';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {shallow} from 'enzyme';
import {filters,altFilters} from "../fixtures/filters";
import moment from 'moment';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;


beforeEach(()=>{

setTextFilter=jest.fn();
sortByDate=jest.fn();
sortByAmount=jest.fn();
setStartDate=jest.fn();
setEndDate=jest.fn();
wrapper = shallow(
    <ExpenseListFilters
        filters={filters}
        mappedSetTextFilter={setTextFilter}
        mappedSortByDate={sortByDate}
        mappedSortByAmount={sortByAmount}
        mappedSetEndDate={setEndDate}
        mappedSetStartDate={setStartDate}
    />
)
});



test('should render expenselistfilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});
test('should render expenselistfilters correctly with alt data',()=>{
    wrapper.setProps({filters:altFilters})
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
   const input =  wrapper.find('input');
   input.simulate('change',{target:{value:'water'}})
    expect(setTextFilter).toHaveBeenCalledWith('water');
});

test('should sort by date',()=>{
    wrapper.find('select').simulate('change',{target:{value:'amount'}})
    expect(sortByAmount).toHaveBeenCalled();

});

test('should sort by amount',()=>{
    wrapper.find('select').simulate('change',{target:{value:'date'}})
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle date changes',()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate);

});

test('should handle date focus changes',()=>{
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});