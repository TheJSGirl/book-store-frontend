import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyBook from './MyBook';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import {deleteMybook, addBook, showEditForm} from '../../actions/myBook';
import Edit from './AddBook';

class MyBookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBooks: true
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }
  
    render() {
        const {getBooks, getUserdata, deleteMybook, addBook, showEditForm} = this.props;
        const {bookInfo, user, showForm } = this.props.data;
        return (
            <React.Fragment>

              {showForm && <Edit showForm={showForm} />}
              {bookInfo && !showForm && this.state.showBooks && <MyBook books={bookInfo.books} allBooks={getBooks} showEditForm={showEditForm} userData={user} deleteMybook={deleteMybook} addBook={addBook}/>
              }
            </React.Fragment>

        )
    }

}
function mapStateToProps(data) {
    return data;
  }
export default connect(mapStateToProps, {getBooks, getUserdata, deleteMybook, addBook, showEditForm})(MyBookPage)