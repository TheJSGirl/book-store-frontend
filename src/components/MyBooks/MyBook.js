import React, {Component} from 'react';
import Book from '../Home/Book';
import './MyBook.css';

class MyBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDeleteVisible :true,
            isEditVisible: true,
        }
    }
    
    componentDidMount() {
        this.props.allBooks();
    }
    

    render() {
        const {userData, books, allBooks, deleteMybook} = this.props;
        let myBooks = [];
        if(userData.id ) {
              books && books.map((book) => {
                if(book.user === userData.id) {
                    myBooks.push(book);
                    return myBooks;
                }

            })
        }

        return (
        <div className="myBooks">
            <div className="search-box">
                <input className="seach-myBook" />
            </div>
            <div className="myBook">
                {myBooks.map(book => <Book data={book} key={book.id} delete={this.state.isDeleteVisible} edit={this.state.isEditVisible}
                 deleteMybook={deleteMybook} allBooks={allBooks}/>)}
            </div>
        </div>)
    }
}

export default MyBook;