import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.allBooks();
    }

    render() {
        const {books, allBooks} = this.props;
       return (
           <React.Fragment>
                {this.props.books && this.props.books.map(e => <Book data={e} key={e.id}/>)}
           </React.Fragment>
       )
    }

}

export default BookList;