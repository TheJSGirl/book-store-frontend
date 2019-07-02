import React, {Component}from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import './SignUp.css';

class SignUpPage extends Component {

   render() {
       const { userSignupRequest } = this.props;
    return (
        <div className="row">
                <h1>Register</h1>
                <SignUpForm userSignupRequest={userSignupRequest}/>
        </div>
    );
   }
}

export default connect(null, {userSignupRequest})(SignUpPage);