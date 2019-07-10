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
        const Links = <div className="Nav-link-right">
                <NavLink exact activeClassName="active-link" to="/signup" className="Link">Register</NavLink>
                <NavLink exact activeClassName="active-link" to="/login" className="Link">Login</NavLink>
            </div>   
        const activeUser = <React.Fragment >
                            <div className="Nav-link-right">
                                <NavLink exact activeClassName="active-link" to="/profile" className="Link">Profile 
                                </NavLink>
                                <NavLink exact activeClassName="active-link" to="/logout" className="Link">Logout</NavLink>
                            </div>
                            <div className="Nav-link-left">
                                <NavLink exact activeClassName="active-link" to="/" className="Link">Home
                                </NavLink>
                                <NavLink exact activeClassName="active-link" to="/book/:id" className="Link">Books</NavLink>
                            </div>
                        </React.Fragment>
        return(
            <nav className="App-nav">
                {isAuthenticated ? activeUser : Links }
            </nav>
        )        
    }


}
const mapStateToProps = (state) => {
    return {
        auth: state.data
    }
}

export default connect(mapStateToProps)(Navigation);