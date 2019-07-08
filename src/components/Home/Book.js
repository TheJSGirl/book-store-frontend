import React, {Component} from 'react';
import {getBooks} from '../../actions/book';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

class Book extends Component {

    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.data)
       return (
           <div className="book" >
               <div className="image">
                <img className="book-image" src={require('./image.jpg')}/>
               </div>
                <div className="book-footer">
                    <div className="book-element">
                      <p class="book-title">{this.props.data.name}</p>

                    </div>
                    <div  className="book-element">
                    <button className="cart">
                            <FontAwesomeIcon icon={faCartPlus} size='2x'/>
                    </button> 
                    </div>
                    
                </div>
           </div>
       )
    }

}

export default Book;