import React, {Component} from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';


class Navigation extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const {isAuthenticated} = this.props.auth;
        const Links =<nav className="App-nav"> 
            <NavLink exact activeClassName="active-link" to="/signup">SignUp</NavLink>
            <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
        </nav>
        const logout = <div>
                   <NavLink exact activeClassName="active-link" to="/logout">Logout</NavLink>
                   <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        </div>
        return(
            <div>
                {isAuthenticated ? logout : Links }
            </div>
        )        
    }


}
const mapStateToProps = (state) => {
    return {
        auth: state.data
    }
}

export default connect(mapStateToProps)(Navigation);