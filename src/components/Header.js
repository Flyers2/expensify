import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p> <NavLink exact={true} activeClassName='is-active' to='/'>Dashboard</NavLink></p>
        <p> <NavLink activeClassName='is-active' to='/create'>Create Expense</NavLink></p>

        <p> <NavLink activeClassName='is-active' to='/help'>Help</NavLink></p>
    </header>
)
export default Header;