import React, {Component} from 'react';
import BookList from './BookList';
import './Home.css';


class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
       return (
               <div className="homePage">
               <BookList />
           </div>
       )
    }

}

export default HomePage;