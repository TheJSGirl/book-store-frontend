import React, {Component, Fragment} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserdata, updateUser} from '../../actions/profile';
import './Profile.css'
import Edit from './Edit';
import ChangePassword from './ChangePassword';


class ProfilePage extends Component {

    render() {
        const {getUserdata, updateUser} = this.props;
        const {userDetails} = this.props.data;
        return(
            <Fragment>
                <Profile user={getUserdata} userDetails={userDetails} updateUser={updateUser}/>
            </Fragment>
        );
    }
}
function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getUserdata, updateUser})(ProfilePage);