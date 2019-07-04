import React, {Component} from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Nav.css';


class Navigation extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const {isAuthenticated} = this.props.auth;
        const Links =<nav className="App-nav"> 
            <NavLink exact activeClassName="active-link" to="/signup" className="Link">Register</NavLink>

            <NavLink exact activeClassName="active-link" to="/login" className="Link">Login</NavLink>
        </nav> 
        const logout = <div  className="Nav-link" >
                            <div className="Nav-link-right">
                                <NavLink exact activeClassName="active-link" to="/profile" className="Link">Profile 
                                    <div className="Empty"></div>
                                </NavLink>
                                <NavLink exact activeClassName="active-link" to="/logout" className="Link">Logout</NavLink>
                            </div>
                            <div className="Nav-link-left">
                                <NavLink exact activeClassName="active-link" to="/" className="Link">Home
                                    <div className="Empty"></div>
                                </NavLink>
                                <NavLink exact activeClassName="active-link" to="/books" className="Link">Books</NavLink>
                            </div>
                        </div>
        return(
            <div className="Nav-bar">
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