import filtersReducer from '../../reducers/filters';
import moment from 'moment'


test('should set up default filter value',()=>{
    // default val that redux uses to set up store
    const state = filtersReducer(undefined,'@@INIT');
    expect(state).toEqual({
        text:"",
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});

test('should set sort by to date',()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {type:"SORT_BY_DATE"}
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date')

});

test('should set up text',()=>{
    // default val that redux uses to set up store
    const state = filtersReducer(undefined,{type:'SET_TEXT',text:"some text"});
    expect(state.text).toBe('some text');
});


test('should set up startdate filter',()=>{
    // default val that redux uses to set up store
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate:moment().startOf('month')});
    expect(state.startDate).toEqual(moment().startOf('month'));
});
test('should set up endDate filter',()=>{
    // default val that redux uses to set up store
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate:moment().startOf('month')});
    expect(state.endDate).toEqual(moment().startOf('month'));
});