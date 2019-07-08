import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import Edit from './Edit';
import ChangePassword from './ChangePassword';
import {Redirect} from 'react-router-dom';
import {getUserdata, updateUser} from '../../actions/profile';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            username: '',
            isEditing : false
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidMount() {
        this.props.user(); 
    }


    handleOnchange(e) {
        e.preventDefault();
        console.log([e.target.name])
        this.setState({[e.target.name]: e.target.value});

    }

    handleToggle() {
        this.setState({isEditing: true})
    }

    handleOnclick(event) {
        event.preventDefault();

        this.setState({isEditing: false})
    
    }

    render() {
        const {userDetails} = this.props;
        const updateUser = this.props.updateUser;
        let result;

        if(this.state.isEditing) {

            console.log(this.state.isEditing)

            result = <div className="profile-detail">
            <div className="profile-row">
                <label className="l">Name</label>
                <input 
                    className='i'
                    type="text"
                    name="name"
                    value={userDetails.username}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>Username</label>
                <input
                    className='i' 
                    type="text"
                    name="username"
                    value={userDetails.username}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="profile-row">
                <label className='l'>Email</label>
                <input            
                    className='i' 
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={this.handleOnchange}
                />
            </div>
            <button onClick={this.handleOnclick}>Save</button>
        </div>
            
        }else {
            result = this.props.userDetails ? <div className="profile-detail">
                                <div className="profile-row">
                                    <label className="l">Name</label>
                                    <input 
                                        className='i'
                                        type="text"
                                        name="name"
                                        value={userDetails.username}
                                        
                                    />
                                </div>
                                <div className="profile-row">
                                    <label className='l'>Username</label>
                                    <input
                                        className='i' 
                                        type="text"
                                        name="username"
                                        value={userDetails.username}

                                    />
                                </div>
                                <div className="profile-row">
                                    <label className='l'>Email</label>
                                    <input            
                                        className='i' 
                                        type="email"
                                        name="email"
                                        value={userDetails.email}
                                    />
                                </div>
                            </div>: '';

        }
    
        return(
            <React.Fragment>
                {this.props.userDetails ?(<div className="profile">
                    <div className="profile-title">
                        <h1>Helllo !
                        !{this.props.userDetails.username}</h1>
                    </div>  

                    <div className="profile-info">

                        <div className="profile-image">
                            <img  className="image" src={require('./image.jpg')} />
                        </div>
                        <div className="profile-form">
                            <div className="profile-menu">
                                <React.Fragment><button onClick={this.handleToggle}>Edit</button></React.Fragment>
                                <React.Fragment><ChangePassword /></React.Fragment>
                            </div>
                            {result}
                        </div>
                        
                    </div>
                </div>): '' }
            </React.Fragment>
        );
    }
}

// export default Profile;
function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps)(Profile);