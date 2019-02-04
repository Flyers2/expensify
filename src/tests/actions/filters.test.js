import {setStartDate, setEndDate, setTextFilter, sortByAmount,sortByDate} from "../../actions/filters";
import moment from 'moment'

test('should generate  start date action',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
});


test('should generate end date action',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    })
});

test('should generate set text filter action',()=>{
    const action = setTextFilter('abc')
    expect(action).toEqual({
        type:"SET_TEXT",
        text:'abc'
    })
});
test('should generate set text filter action with default val',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT",
        text:''
    })
});

test('should genereate sort by amount action',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT",
    })
})

test('should genereate sort by date action',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE",
    })
})

