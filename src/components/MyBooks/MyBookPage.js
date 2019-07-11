import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyBook from './MyBook';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import {deleteMybook} from '../../actions/myBook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faPlus  } from '@fortawesome/free-solid-svg-icons'

class MyBookPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {getBooks, getUserdata, deleteMybook} = this.props;
        const {books, user} = this.props.data;
            const btn = <div>
                <button className="myBook-add-btn">
                <FontAwesomeIcon icon={faPlus} color="white" size='3x'/>
                </button>
            </div>
        return (
            <React.Fragment>
                <MyBook books={books} allBooks={getBooks} userData={user} deleteMybook={deleteMybook}/>
                {btn}
            </React.Fragment>
        )
    }

}
function mapStateToProps(data) {
    return data;
  }
export default connect(mapStateToProps, {getBooks, getUserdata, deleteMybook})(MyBookPage)