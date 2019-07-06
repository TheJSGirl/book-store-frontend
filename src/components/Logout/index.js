import React from 'react';
import {logout} from '../../actions/login-logout-Actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { link } from 'fs';


const  logoutUser = (props)  => {

     props.logout();
        return (<div>
            <Redirect to="/login" />
        </div>)
}

export default connect(null, {logout})(logoutUser);