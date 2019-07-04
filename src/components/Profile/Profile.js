import React, {Component} from 'react';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.user(); 
    }
    render() {
        return(
            <div>
                
                {this.props.userDetails ?<div className="profile">
                    <h1 className="greet">Helllo !
                        ! {this.props.userDetails.username}</h1>

                        <img src={require('./image.jpg')} />
                    </div>: ''}
                
            </div>
        );
    }
}

export default Profile;