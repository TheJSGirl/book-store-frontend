import React, {Component} from 'react';
import './Profile.css';


class ChangePassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            password: this.props.password,
            isEditing: false
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleOnchange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});

    }

    handleToggle() {
        this.setState({isEditing: true})
    }

    handleSubmit(e) {
        e.preventDefault();
        // call change password action
        this.setState({isEditing: false})
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result =  <div>
                        <form onSubmit={this.handleSubmit}>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleOnchange}
                            />
                            <button>Confirm</button>
                        </form>
                    </div>
        }else {
            result = <button onClick={this.handleToggle} className="changePassword btn-primary">Change Password</button>
        }
        return result;
    }

}

export default ChangePassword;