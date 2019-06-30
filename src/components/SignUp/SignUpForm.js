import React, {Component} from 'react';
import timezone from '../../data/timezone';
import map from 'lodash/map';
import axios from 'axios';


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
                <h1>Join our community</h1>
                <div>
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChange}
                    />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange = {this.onChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
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
                    {errors.password
                         && <span>{errors.password
                    }</span>}
                </div>
                <div>
                    <label className="control-label">Confirm Password</label>
                    <input
                        type="text"
                        name="passwordConfirmation"
                        className="form-control"
                        value={this.state.passwordConfirmation}
                        onChange = {this.onChange}
                    />
                    {errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
                </div>
                <div>
                    <label className="control-label"> TimeZone</label>
                    <select
                        type="text"
                        name="timezone"
                        className="form-control"
                        value={this.state.timezone}
                        onChange = {this.onChange}
                    >
                        <option value="" disabled>Choose your timezone </option>
                        {options}
                    </select>
                    {errors.timezone && <span>{errors.timezone}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }

}

export default SignUpForm;