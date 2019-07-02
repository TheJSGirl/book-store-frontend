import React, {Component}from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/login-logout-Actions';
import {authAction} from '../../actions/authActions';

class LoginPage extends Component {

   render() {
       const {login, authAction } = this.props;
    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <LoginForm loginProp={login} authAction={authAction} />
            </div>

        </div>
    );
   }
}

export default connect(null, {login, authAction})(LoginPage);