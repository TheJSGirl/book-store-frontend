import React from 'react';
import './App.css';
import {Route, Switch, NavLink, BrowserRouter, Link} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <nav className="App-nav"> 
          <NavLink exact activeClassName="active-link" to="/">Hello</NavLink>
          <NavLink exact activeClassName="active-link" to="/signup">SignUp</NavLink>
          <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
      </nav>
      <Switch>
     
      <Route exact path="/signup" component={() => <SignUpPage/>}/>
      <Route exact path="/login" component={LoginPage}/>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
