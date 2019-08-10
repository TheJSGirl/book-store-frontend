import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            author: '',
            description: '',
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnchange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})

    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.showForm) {
            const data = {
                body: this.state,
                bookId: this.props.showForm.bookId
            }
            this.props.editBook(data)
            this.props.allBooks();
            this.props.toggleForm();
            window.location.reload();
        } else {
            const data = {
                title: this.state.title,
                price: this.state.price,
                author: this.state.author,
                description: this.state.description,
            }
            this.props.addBook(data);
            this.props.allBooks();
            this.props.handleToggle();
            window.location.reload();
        }
    }
    componentDidMount() {
        if(this.props.showForm) {
            this.setState({title: this.props.showForm.book.title || '',
                price: this.props.showForm.book.price || '',
                description: this.props.showForm && this.props.showForm.book && this.props.showForm.book.description,
                author: this.props.showForm.book.author || '',
                })
        }
     
    }

    render() {
    
           let form =  <div className="profile-detail">
            <div className="profile-row">
                <label className="l">Title</label>
                <input 
                    className='i'
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className="l">Description</label>
                <input 
                    className='i'
                    type="text"
                    name="description"
                    value={this.state.description} 
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>Price</label>
                <input
                    className='i' 
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="profile-row">
                <label className='l'>Authors</label>
                <input
                    className='i' 
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="btn">
                <button onClick={this.handleSubmit} className="btn-primary">Save</button>

            </div>
        </div>;
        return form;

        
    }

}

export default AddBook;