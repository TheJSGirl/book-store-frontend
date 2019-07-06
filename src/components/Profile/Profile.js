import React, {Component} from 'react';
import './Profile.css';
import Edit from './Edit';
import ChangePassword from './ChangePassword';
import {Redirect} from 'react-router-dom';

class Profile extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.user(); 
    }

    render() {
        const data = this.props.userDetails;
        const updateUser = this.props.updateUser;
    
        return(
            <div>
                
                {this.props.userDetails ?(<div className="profile">
                    <h1 className="greet">Helllo !
                        ! {this.props.userDetails.username}</h1>
                        <img className="profile-image" src={require('./image.jpg')} />
                        
                          <label>Name:  {this.props.userDetails.username}</label>

                          <label>Email:  {this.props.userDetails.email}</label>

                            <label>Username: {this.props.userDetails.username}</label>
                            <div className="update">
                                <Edit userDetails={data} updateUser={updateUser} user={this.props.user} />
                                <ChangePassword />
                            </div>
                            
                        
                    </div>): '' }
                
            </div>
        );
    }
}

export default Profile;