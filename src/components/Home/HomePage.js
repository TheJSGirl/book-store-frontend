import React, {Component} from 'react';
import BookList from './BookList';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/book';
import {getUserdata} from '../../actions/profile';
import './Home.css';


class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(e) {
        e.preventDefault();
        this.setState({search:e.target.value});
    }

    render() {
        const {getBooks, getUserdata} = this.props;
        const {books, user} = this.props.data;

       return (<div className="homePage">
    
                        <div className="search-bar">
                            <input 
                                className="search"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleOnchange}
                                />
                        </div>
                       
                       <BookList books={books} allBooks={getBooks} userData={user}/>
                       
                   
                </div>)
    }

}

function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getBooks})(HomePage);