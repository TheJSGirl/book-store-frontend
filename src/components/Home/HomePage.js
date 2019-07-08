import React, {Component} from 'react';
import BookList from './BookList';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/book';
import './Home.css';


class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {getBooks} = this.props;
        const {books} = this.props.data;

       return (<div className="homePage">
                    <BookList books={books} allBooks={getBooks}/>
                </div>)
    }

}

function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getBooks})(HomePage);