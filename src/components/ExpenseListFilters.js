import React from 'react';
import {connect} from 'react-redux';
import filters from "../reducers/filters";
import {setStartDate, setTextFilter, sortByAmount, sortByDate, setEndDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.mappedSetStartDate(startDate);
        this.props.mappedSetEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };

    changeFilter = (e) => {
     //   console.log(this.props + "here in change filter")
        this.props.mappedSetTextFilter(e.target.value);

    };
    onSortChange = (e) =>  {

        const sortType = e.target.value;
        if (sortType === 'date') {
            this.props.mappedSortByDate();
        }
        if (sortType === 'amount') {
            this.props.mappedSortByAmount();
        }
    };


    render() {
        return (

            <div>
                <input type="text" className='filterInput' value={this.props.filters.text} onChange={this.changeFilter}/>

                <select onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}

                />

            </div>
        )


    }

}


const mapStateToProps = (state) => {
    return (
        {filters: state.filters}
    )

};

const mapDispatchToProps=(dispatch)=>({
    mappedSetTextFilter:(text)=>dispatch(setTextFilter(text)),
    mappedSortByDate:()=>dispatch(sortByDate()),
    mappedSortByAmount:()=>dispatch(sortByAmount()),
    mappedSetStartDate:(date)=>dispatch(setStartDate(date)),
    mappedSetEndDate:(date)=>dispatch(setEndDate(date))

});
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);