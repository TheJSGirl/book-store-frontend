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
            showBooks: true
         
        }
        this.handleAddBook = this.handleAddBook.bind(this);
    }
    
    componentDidMount() {
        this.props.allBooks();
    }
    
    handleAddBook() {
        console.log("hello")
        this.setState({showAddBook: true, showBooks: false})
    }

    render() {
        const {userData, books, allBooks, deleteMybook, addBook} = this.props;
        let myBooks = [];

        const btn = <div>
            <button className="myBook-add-btn" onClick={this.handleAddBook} >
            <FontAwesomeIcon icon={faPlus} color="white" size='3x'/>
            </button>
        </div>
        if(userData.id ) {
              books && books.map((book) => {
                if(book.user === userData.id) {
                    myBooks.push(book);
                    return myBooks;
                }

            })
        }

        return (
        <React.Fragment>
            {this.state.showBooks ? <div className="myBooks">
                <div className="search-box">
                    <input className="seach-myBook" />
                </div>
                 <div className="myBook">
                    {myBooks.map(book => <Book data={book} key={book.id} delete={this.state.isDeleteVisible} edit={this.state.isEditVisible}
                    deleteMybook={deleteMybook} allBooks={allBooks}/>)}
                </div>
                
            </div>: ''}
            {btn}
            {this.state.showAddBook? <AddBook addBook={addBook} allBooks={allBooks}/> : ''}
        </React.Fragment>

        )
    }
}

export default MyBook;