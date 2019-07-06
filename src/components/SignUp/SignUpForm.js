import React, {Component} from 'react';
import timezone from '../../data/timezone';
import map from 'lodash/map';
import './SignUp.css';
import {Redirect} from 'react-router-dom';



class SignUpForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:"",
            email:"",
            password:"",
            passwordConfirmation: "",
            timezone: "",
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({errors: {}});
        e.preventDefault();
        this.props.userSignupRequest(this.state)
        .then(() => {}, 
        ({data}) => this.setState({errors: data}))
        this.setState({ username: '', email: '', password:'', passwordConfirmation:'', timezone:''});

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const options = map(timezone, (val, key) => 
            <option key={val} value={val}>{key}</option>
        )

        const {errors} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChange}
                        placeholder="Username"
                    />
                    {errors && errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange = {this.onChange}
                        placeholder="Email"
                    />
                    { errors && errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange = {this.onChange}
                        placeholder="Password"
                    />
                    {errors && errors.password
                         && <span>{errors.password
                    }</span>}
                </div>
                <div>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        value={this.state.passwordConfirmation}
                        onChange = {this.onChange}
                        placeholder="Confirm Password"
                    />
                    {errors && errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
                </div>
                <div>
                </div>
                <div className="form-group">
                    <button className="btn-primary">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }

}

export default SignUpForm;