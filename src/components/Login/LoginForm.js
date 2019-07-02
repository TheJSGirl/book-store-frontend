import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import setAuthorization from '../../utils';
import jwt from 'jsonwebtoken';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginProp(this.state).then((res) =>  {
            const token = res.headers['x-auth'];
            localStorage.setItem('jwtToken', token);
            setAuthorization(token);
            this.setState({ redirect: true });
            this.props.authAction(token);
            this.setState({username:'', password: ''});
        },
        );
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return(
            <form>
                <h1>Login</h1>
                <div>
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChange}
                    />
                </div>
                <div>
                    <label className="control-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange = {this.onChange}
                    />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary btn-lg"  onClick={this.handleSubmit}>
                         Login
                    </button>
                </div>
            </form>
        )
    }

}

export default LoginForm;