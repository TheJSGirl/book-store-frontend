import React, {Component} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserdata} from '../../actions/profile';
import './Profile.css'


class ProfilePage extends Component {

    render() {
        const {getUserdata} = this.props;
        const {userDetails} = this.props.data;
        return(
            <div className="row">
                <Profile user={getUserdata} userDetails={userDetails}/>
            </div>
        );
    }
}
function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getUserdata})(ProfilePage);