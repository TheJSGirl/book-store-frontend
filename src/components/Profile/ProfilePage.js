import React, {Component} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserdata, updateUser} from '../../actions/profile';
import './Profile.css'


class ProfilePage extends Component {

    render() {
        const {getUserdata, updateUser} = this.props;
        const {userDetails} = this.props.data;
        return(
            <div className="profileRow">
                <Profile user={getUserdata} userDetails={userDetails} updateUser={updateUser}/>
            </div>
        );
    }
}
function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getUserdata, updateUser})(ProfilePage);