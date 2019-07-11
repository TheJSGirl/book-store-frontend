import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyBook from './MyBook';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import {deleteMybook} from '../../actions/myBook';

class MyBookPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {getBooks, getUserdata, deleteMybook} = this.props;
        const {books, user} = this.props.data;
        
        return (
            <React.Fragment>
                <MyBook books={books} allBooks={getBooks} userData={user} deleteMybook={deleteMybook}/>
            </React.Fragment>
        )
    }

}
function mapStateToProps(data) {
    return data;
  }
export default connect(mapStateToProps, {getBooks, getUserdata, deleteMybook})(MyBookPage)