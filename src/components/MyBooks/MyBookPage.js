import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyBook from './MyBook';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import {deleteMybook, addBook, showEditForm, editBook, myBook} from '../../actions/myBook';
import Edit from './AddBook';

class MyBookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBooks: true,
            book: []
        }
    }

    componentDidMount() {
        this.props.myBook().then(e => this.setState({book: e.payload.books}))
    }
  
    render() {
        const {getBooks, getUserdata, deleteMybook, addBook, showEditForm, editBook} = this.props;
        const {showForm } = this.props;
        return (
            <React.Fragment>

              {showForm && <Edit showForm={showForm} editBook={editBook}/>}

              {!showForm && this.state.book.length  && this.state.showBooks && <MyBook books={this.state.book} allBooks={getBooks} 
        
                deleteMybook={deleteMybook} addBook={addBook}
                getUserData = {getUserdata}
                myBook={myBook}
                showEditForm={showEditForm}
               />
              }
            </React.Fragment>

        )
    }

}
function mapStateToProps({data}) {
    return data;
  }
export default connect(mapStateToProps, {getBooks, getUserdata, deleteMybook, addBook, showEditForm, editBook, myBook })(MyBookPage)