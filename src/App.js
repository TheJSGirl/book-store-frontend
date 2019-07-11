import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import LoginPage from './components/Login/LoginPage';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
import Profile from './components/Profile/ProfilePage';
import Home from './components/Home/HomePage';
import Book  from './components/Home/BookDetail';
import MyBook from './components/MyBooks/MyBookPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/signup" component={() => <SignUpPage/>}/>
      <Navigation />
      <Switch>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route exact path="/my-book" component={MyBook} />
        <Route exact path="/book/:id" component={(routeProp) => <Book id={routeProp.match.params.id}/>} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
