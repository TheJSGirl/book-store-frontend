import React, {Component} from 'react';
import BookList from './BookList';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/book';
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
        const {getBooks} = this.props;
        const {books} = this.props.data;

       return (<div className="homePage">
                         {/* <div className="search-bar">
                            <input 
                                name="search"
                                value={this.state.search}
                                onChange={this.handleOnchange}
                                />
                        </div> */}
                   
                        <BookList books={books} allBooks={getBooks}/>
                   
                </div>)
    }

}

function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getBooks})(HomePage);