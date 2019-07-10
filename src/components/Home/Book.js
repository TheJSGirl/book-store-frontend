import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

class Book extends Component {

    constructor(props){
        super(props);

    }

    showBook(id) {
        return <Link to={"/book/"+id} />

    }

    render() {
        const {_id} = this.props.data;
       return (
           <Link to={"/book/"+_id}>
            <div className="book"  style={{cursor: 'pointer'}}>
               <div className="image">
                    <img className="book-image" src={require('./image.jpg')}/>

               </div>
                <div className="book-footer">
                    <div className="book-element">
                      <p class="book-title">{this.props.data.title}</p>

                    </div>
                    <div  className="book-element">
                    <button className="cart">
                            <FontAwesomeIcon icon={faCartPlus} size='2x'/>
                    </button>
                    </div>
                </div>

           </div>
        </Link>
          
       )
    }

}

export default Book;