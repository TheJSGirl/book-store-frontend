import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link, withRouter } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashAlt, faEdit, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'
import Edit from '../MyBooks/AddBook';

class Book extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title,
            price: this.props.data.price,
            author: this.props.data.author,
            showEdit: true,
        }

    }

    showBook(id) {
        return  this.props.history.push(`/book/${id}`);
    }

    handleDelete(id) {
        this.props.deleteMybook(id);
    }
    handleEdit(id) {
        const data = {
            book: this.state,
            bookId: id,
           showForm: true,
        }
        this.props.showEditForm(data);
    }
    
    render() {
        const {_id} = this.props.data;
        console.log('----', this.props.allBooks)
        const {userData, deleteMybook, getBooks, showEditForm, allBooks} = this.props;
        console.log('-----=====', allBooks)

        const books =  <React.Fragment>
            <div className="book"  style={{cursor: 'pointer'}} >
                <div className="image" onClick={() => this.showBook(_id)}>
                    <img className="book-image" src={require('./image.jpg')}/>
                </div>
            <div className="book-footer">
                <div className="book-element">
                <p class="book-title-sm">{this.props.data.title}</p>
                </div>
            <div  className="book-element">  
                 {this.props.delete && this.props.edit ?  (<div>
                     <button className="cart mybook-btn" onClick={() => this.handleDelete(_id)}>
                         <FontAwesomeIcon icon={faTrashAlt} size='1x'/>
                     </button>
                     <button className="cart mybook-btn" onClick={() => this.handleEdit(_id)} >
                         <FontAwesomeIcon icon={faEdit} size='1x'/>
                     </button>
                 </div>)
                 :  <button className="cart">
                     <FontAwesomeIcon icon={faCartPlus} size='2x'/>
                 </button>}
             </div>
        </div>
    </div>
</React.Fragment>
       return (
           <React.Fragment>
               {books}
           </React.Fragment>
           
       )
    }

}

export default withRouter(Book);