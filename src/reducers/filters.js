import moment from 'moment'

const filtersDefaultState =
    {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
export default (state = filtersDefaultState, action) => {


    switch (action.type) {

        case 'SET_TEXT':
            //   console.log(`setting text filter ${action.text}`)
            return {...state, text: action.text};

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
    //        console.log('sorting by date')
            return {...state, sortBy: 'date'};

        case 'SET_START_DATE':
            return ({...state, startDate: action.startDate});
        case 'SET_END_DATE':
            return ({...state, endDate: action.endDate});

        default:
            return state;
    }
};