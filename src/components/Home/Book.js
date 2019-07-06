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
               <h1 className="book-title">Title</h1>
               <button className="cart"> <i class="fas fa-cart-plus"></i></button>
           </div>
       )
    }

}

export default Book;