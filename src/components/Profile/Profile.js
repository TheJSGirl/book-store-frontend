import React, {Component} from 'react';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.handleOnclick = this.handleOnclick.bind(this);

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
                        
                          <label>Name:  {(this.props.userDetails.username).toUpperCase()}</label>

                          <label>Email:  {this.props.userDetails.email}</label>

                            <label>Username: {this.props.userDetails.username}</label>
                            
                            <div>

                            <button onClick={this.handleOnclick}>Edit</button>
                            <button>Save</button>
                                </div>
                        
                    </div>: ''}
                
            </div>
        );
    }
}

export default Profile;