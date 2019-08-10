import React, {Component} from 'react';
import BookList from './BookList';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/book';
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
        let filteredBooks = [];
        this.setState({search:e.target.value}, () => {
            filteredBooks = this.state.books.filter((book) =>{
                if(book.title.match(new RegExp(`${this.state.search}`, 'ig'))) {
                    return book;
                }
            });
             if(this.state.books.length <= 0 || !this.state.search) {
                this.props.getBooks().then(e => this.setState({books: e.payload.books }))
             }
             this.setState({ books: filteredBooks });
        });
       
    }

    render() {
        const {getBooks} = this.props;

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