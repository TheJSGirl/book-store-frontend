import React, {Component} from 'react';
import './Home.css';

class Book extends Component {

    constructor(props){
        super(props);
    }

    render() {
       return (
           <div className="book" >
               <div className="image">
                <img className="book-image" src={require('./image.jpg')}/>

               </div>
           </div>
       )
    }

}

export default Book;