import React, {Component}from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/login-logout-Actions';
import {authAction} from '../../actions/authActions';
import './Login.css';

class LoginPage extends Component {

   render() {
       const {login, authAction } = this.props;
    return (
        <div className="row">
                <h1>Login</h1>
                <LoginForm loginProp={login} authAction={authAction} />
        </div>
    );
   }
}

export default connect(null, {login, authAction})(LoginPage);