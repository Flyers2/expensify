import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selecters/expenses';

export const ExpenseList = (props) => (
    <div>

        {props.expenses.length ===0 &&
            <p>No Expenses</p>
        }

        {props.expenses.length > 0 &&
        props.expenses.map((exp, i) => {
                return (
                    <ExpenseListItem
                        key={exp.id}
                        {...exp}
                    />

                )
            }
        )

        }
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

const ConnectedExpenseLIst = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseLIst;


