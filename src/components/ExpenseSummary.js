import React from 'react';
import {connect} from 'react-redux'
import {getTotal} from "../selecters/expenses-total";
import numeral from 'numeral';
import selectExpenses from '../selecters/expenses';


export const ExpenseSummary = (props) => {
    return (
        props.numberOfExpenses>0 ?
            <div>There are {props.numberOfExpenses} visible Expenses for a total of { numeral(props.totalExpenses/100).format('$0,0.00')}</div>
            :
          "There are no visible Expenses"

    )
};

const mapStateToProps = (state, props) => {
    return {
        totalExpenses: getTotal(selectExpenses( state.expenses,state.filters)),
        numberOfExpenses:selectExpenses( state.expenses,state.filters).length
    }
}


export default connect(mapStateToProps)(ExpenseSummary);


//  <div>There are {props.numberOfExpenses} Expenses for a total of { numeral(props.totalExpenses).format('$0,0.00')}</div>