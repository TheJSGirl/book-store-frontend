import React, {Component} from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:"",
            email:"",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
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
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
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
                    <button className="btn btn-primary btn-lg">
                         Login
                    </button>
                </div>
            </form>
        )
    }

}

export default LoginForm;