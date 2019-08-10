import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
       return (
           <div className="my-book">
                {this.props.books && this.props.books.map(e => <Book data={e} key={e.id} userData={this.props.userData}/>)}
           </div>
       )
    }

}

export default BookList;