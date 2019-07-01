import React from 'react';
import './App.css';
import {Route, Switch, NavLink, BrowserRouter} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      {/* <nav className="App-nav"> 
          <NavLink exact activeClassName="active-link" to="/">Hello</NavLink>
      </nav> */}
      <Switch>
        <Route exact path="signup" component={() => <SignUpPage />}/>
        <Route exact path="login" component={() => <LoginPage/>}/>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
