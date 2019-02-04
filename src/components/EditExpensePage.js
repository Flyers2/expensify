import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenses";





export class EditExpensePage extends React.Component {

    onSubmit = (newExpense) => {
           // console.log('submitting expense:',newExpense)
           // console.log('submitting expense id:',this.props.expense.id)
        this.props.outerEditExpense( this.props.expense.id,newExpense);
        //      outerEditExpense(this.props.match.params.id, expense);
        this.props.history.push('/')
    }

    deleteExpense = () => {
     //   console.log(this.props, 'from delete expense function in editExpense.js')
        this.props.outerDeleteExpense(this.props.expense.id);
        this.props.history.push('/')
    }

    render() {
        return (

            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>

                <p>
                    <button className='removeExpense' onClick={ this.deleteExpense} >Remove</button>
                </p>


            </div>
        )


    }
}

const mapStateToProps = (state, props) => {
    const foundex=state.expenses.find((ex) => ex.id === props.match.params.id);
   // console.log(foundex)
    return {
        expense:foundex ,
        fakeprop: "am i here?"
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        outerEditExpense: ( id,expense) => {
            dispatch(editExpense(id, expense));
        },
        outerDeleteExpense:(id)=>(dispatch(removeExpense(id)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);