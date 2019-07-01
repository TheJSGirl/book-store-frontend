import React from 'react';
import './App.css';
import {Route, IndexRoute} from 'react-router';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <Route path="signuo" component={SignUpPage}/>
      <Route path="login" component={LoginPage}/>
    </div>
  );
}

export default App;
