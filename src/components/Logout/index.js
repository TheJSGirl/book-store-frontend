import React from 'react';
import {logout} from '../../actions/login-logout-Actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { link } from 'fs';


const  logoutUser = (props)  => {
    const Links =<nav className="App-nav"> 
    <NavLink exact activeClassName="active-link" to="/signup">SignUp</NavLink>
    <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
</nav>
     props.logout();
        return (<div>
            {Links}
            <Redirect to="/login" />
        </div>)
}

export default connect(null, {logout})(logoutUser);