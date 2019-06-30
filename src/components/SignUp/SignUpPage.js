import React, {Component}from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';

class SignUpPage extends Component {

   render() {
       const { userSignupRequest } = this.props;
    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SignUpForm userSignupRequest={userSignupRequest}/>
            </div>

        </div>
    );
   }
}

export default connect(null, {userSignupRequest})(SignUpPage);