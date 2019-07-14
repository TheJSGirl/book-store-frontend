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
            search: '',
            books: []
        }
        this.handleOnchange = this.handleOnchange.bind(this);
    }


    componentDidMount() {
        this.props.getBooks().then(e => this.setState({books: e.payload.books }))
    }

    handleOnchange(e) {
        e.preventDefault();
        this.setState({search:e.target.value}, () => {
            return this.state.books.filter((book) =>{
                if(book.title === this.state.search) {
                    return book;
                }
            })
            
        });
    }

    render() {
        const {getBooks, getUserdata} = this.props;

        const { user, bookInfo} = this.props.data;
       return (<div className="homePage">
    
                        <div className="search-bar">
                            <input 
                                className="search"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleOnchange}
                                />
                        </div>
                       
                       { bookInfo && <BookList books={this.state.books} allBooks={getBooks} userData={user}/>}
                       
                   
                </div>)
    }

}

function mapStateToProps(data) {
    return data;
  }

export default connect(mapStateToProps, {getBooks})(HomePage);