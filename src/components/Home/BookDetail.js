import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBookById} from '../../actions/book';
import './Home.css';

class BookDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:'',

        }
    }

    componentDidMount() {
        const {id} = this.props;
        this.props.getBookById(id).then(({data}) => {
            this.setState({title: data.data.title, description: data.data.description})
        })
    }

    render() {

        return (
            <div className="book-details">
                <div className="book-heading">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="book-data">
                    <div className="book-cover">
                        <img className="book-image" src={require('./image.jpg')}/>
                    </div>
                    <div className="book-description">
                        <div className="description">
                            <p >{this.state.description}</p>
                        </div>
                        <div className="price-options">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, {getBookById})(BookDetails);