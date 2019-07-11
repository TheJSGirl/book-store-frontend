import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

class Book extends Component {

    constructor(props){
        super(props);

    }

    showBook(id) {
        return  this.props.history.push(`/book/${id}`);
    }

    handleDelete(id) {
        this.props.deleteMybook(id);
    }

    render() {
        const {_id} = this.props.data;
        const {userData, deleteMybook, getBooks} = this.props;
       return (
            <div className="book"  style={{cursor: 'pointer'}} >
               <div className="image" onClick={() => this.showBook(_id)}>
                    <img className="book-image" src={require('./image.jpg')}/>
               </div>
                <div className="book-footer">
                    <div className="book-element">
                      <p class="book-title-sm">{this.props.data.title}</p>
                    </div>
                    <div  className="book-element">
                       
                        {this.props.delete && this.props.edit?  (<div>
                            <button className="cart mybook-btn" onClick={() => this.handleDelete(_id)}>
                                <FontAwesomeIcon icon={faTrashAlt} size='1x'/>
                            </button>
                            <button className="cart mybook-btn" >
                                <FontAwesomeIcon icon={faEdit} size='1x'/>
                            </button>
                        </div>

                        )
                            :  <button className="cart">
                            <FontAwesomeIcon icon={faCartPlus} size='2x'/>
                        </button>}
                    </div>
                </div>

           </div>  
       )
    }

}

export default withRouter(Book);