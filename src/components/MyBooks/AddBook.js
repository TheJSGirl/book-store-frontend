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
            isFormVisible: true,
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
        const data = {
            title: this.state.title,
            price: this.state.price,
            author: this.state.author,
            description: this.state.description
        }
        this.props.addBook(data);  
        this.setState({isFormVisible: false})
        this.props.allBooks();
    }


    render() {
        const {isFormVisible} = this.state;
        
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
        return isFormVisible ? form : <Redirect to="/" />;

        
    }

}

export default AddBook;