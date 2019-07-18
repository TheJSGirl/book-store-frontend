import React, {Component} from 'react';
import Book from '../Home/Book';
import './MyBook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faPlus  } from '@fortawesome/free-solid-svg-icons';
import AddBook from './AddBook';
class MyBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDeleteVisible :true,
            isEditVisible: true,
            showAddBook: false,
            showBooks: true,
            books: this.props.books,
            query: ''
         
        }
        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(e) {
        e.preventDefault();
        let filteredBooks = [];
        this.setState({search:e.target.value}, () => {
            filteredBooks = this.state.books.filter((book) =>{
                if(book.title.match(new RegExp(`${this.state.search}`, 'ig'))) {
                    return book;
                }
            });
             if(this.state.books.length <= 0 || !this.state.search) {
                 this.props.books.map(e => this.setState({books: e}))
                this.props.allBooks().then(e => this.setState({books: e.payload.books }))
             }
             this.setState({ books: filteredBooks });
        });

    }
    
    handleAddBook() {
        this.setState({showAddBook: true, showBooks: false})
    }

    handleToggle() {
        this.setState({showAddBook: false, showBooks: true})
    }

    render() {
        const {userData, allBooks, deleteMybook, addBook, showEditForm, editBook, toggleEditForm, toggleForm} = this.props;
        const { books } = this.state;
        const btn = <div>
            <button className="myBook-add-btn" onClick={this.handleAddBook} >
                <FontAwesomeIcon icon={faPlus} color="white" size='3x'/>
            </button>
        </div>
    

        return (
        <React.Fragment>
            {this.state.showBooks && <div className="myBooks">
                <div className="search-box">
                    <input 
                        className="seach-myBook"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleOnchange}
                    
                    />
                </div>
                 <div className="myBook">
                    {books.map(book => <Book data={book} key={book.id} 
                    showEditForm={showEditForm} delete={this.state.isDeleteVisible} 
                    edit={this.state.isEditVisible}
                    deleteMybook={deleteMybook} allBooks={allBooks} 
                    toggleEditForm={toggleEditForm}
                    />)}
                </div> 
            </div>}
            {btn}
            {this.state.showAddBook && <AddBook addBook={addBook} allBooks={allBooks}
             editBook={editBook} handleToggle={this.handleToggle}/>}
        </React.Fragment>   

        )
    }
}

export default MyBook;