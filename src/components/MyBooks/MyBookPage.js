import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyBook from './MyBook';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import {deleteMybook, addBook} from '../../actions/myBook';

class MyBookPage extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        const {getBooks, getUserdata, deleteMybook, addBook} = this.props;
        const {bookInfo, user} = this.props.data;
        
        return (
            <React.Fragment>
                {bookInfo && <MyBook books={bookInfo.books} allBooks={getBooks} userData={user} deleteMybook={deleteMybook} addBook={addBook}/>}
            </React.Fragment>
        )
    }

}
function mapStateToProps(data) {
    return data;
  }
export default connect(mapStateToProps, {getBooks, getUserdata, deleteMybook, addBook})(MyBookPage)