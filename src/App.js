import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
import Profile from './components/Profile/ProfilePage';
import Home from './components/Home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/signup" component={() => <SignUpPage/>}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
