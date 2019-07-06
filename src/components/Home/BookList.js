import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    render() {
       return (
           <React.Fragment>
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />

           </React.Fragment>
       )
    }

}

export default BookList;