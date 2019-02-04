import React from 'react';


import {Link} from 'react-router-dom'


export const ExpenseListItem = (props)=>{

    return(
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description} </h3>
            </Link> - {props.amount}
           -

        </div>

    )
};

const ConnectedExpenseListItem = ExpenseListItem
export default ConnectedExpenseListItem