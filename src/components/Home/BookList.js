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
       return (
           <div className="my-book">
                {this.props.books && this.props.books.map(e => <Book data={e} key={e.id}/>)}
           </div>
       )
    }

}

export default BookList;