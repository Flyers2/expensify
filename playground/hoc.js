import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info !!!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};
const withAuthInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p> please login to view the info</p> :   <WrappedComponent {...props}/>}

        </div>
    )
}
const AuthInfo = withAuthInfo(Info);

const AdminInfo = withAdminWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info='birds can fly'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='birds can fly'/>, document.getElementById('app'));