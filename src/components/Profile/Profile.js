import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Profile.css';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            username: '',
            newPassword: '',
            confirmPassword: '',
            isEditing : false,
            isPasswordChanged: false
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }


    componentDidMount() {
         this.props.user().then((r) => {
             this.setState({name: r.payload.name, email: r.payload.email, username: r.payload.username})
         });
        
    }


    handleOnchange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});

    }

    handleToggle() {
        this.setState({isEditing: true})
    }

    handlePasswordToggle() {
        this.setState({isPasswordChanged: true})
    }

    handleChangePassword(e) {
        e.preventDefault();
        //call change password action
        this.setState({ isPasswordChanged: false})
    }

    handleOnclick(event) {
        event.preventDefault();

        this.setState({isEditing: false})
    
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.setState({isEditing: false, isPasswordChanged: false})
    }

    render() {
        const {userDetails} = this.props;
        let result;

        if(this.state.isPasswordChanged) {

            result = <div className="profile-detail">
            <div className="profile-row">
                <label className="l">Password</label>
                <input 
                    className='i'
                    type="password"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>New Password</label>
                <input
                    className='i' 
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="btn">
                <button onClick={this.handleChangePassword} className="btn-primary">Confirmed</button>

            </div>
        </div>

        }
        else if(this.state.isEditing) {


            result = <div className="profile-detail">
            <div className="profile-row">
                <label className="l">Name</label>
                <input 
                    className='i'
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>Username</label>
                <input
                    className='i' 
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="profile-row">
                <label className='l'>Email</label>
                <input            
                    className='i' 
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnchange}
                />
            </div>
            <div className="btn">
                <button onClick={this.handleSubmit} className="btn-primary">Save</button>

            </div>
        </div>
            
        }else {
            result = userDetails && <div className="profile-detail">
                                <div className="profile-row">
                                    <label className="l">Name</label>
                                    <input 
                                        className='i'
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        
                                    />
                                </div>
                                <div className="profile-row">
                                    <label className='l'>Username</label>
                                    <input
                                        className='i' 
                                        type="text"
                                        name="username"
                                        value={this.state.username}

                                    />
                                </div>
                                <div className="profile-row">
                                    <label className='l'>Email</label>
                                    <input            
                                        className='i' 
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                    />
                                </div>
                            </div>;

        }
    
        return(
            <React.Fragment>
                {userDetails ? (<div className="profile">
                    <div className="profile-title">
                        <h1>Helllo !
                        !{userDetails.username}</h1>
                    </div>  

                    <div className="profile-info">

                        <div className="profile-image">
                            <img  className="image" src={require('./image.jpg')} />
                        </div>
                        <div className="profile-form">
                            <div className="profile-menu">
                                <React.Fragment><button onClick={this.handleToggle} className="btn-primary">Edit</button></React.Fragment>
                                <React.Fragment><button  onClick={this.handleChangePassword} className="btn-primary">Change Password</button></React.Fragment>
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