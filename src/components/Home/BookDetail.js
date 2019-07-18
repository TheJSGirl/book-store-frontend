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
            price:''

        }
    }

    componentDidMount() {
        const {id} = this.props;
        this.props.getBookById(id).then(({data}) => {
            this.setState({title: data.data.title, description: data.data.description, price: data.data.price})
        })
    }

    render() {

        return (
            <div className="book-details">
                
                <div className="book-data">
                    <div className="book-cover">
                        <img className="book-image" src={require('./image.jpg')}/>
                    </div>
                    <div className="book-description">
                        <div className="book-heading">
                            <h2 className="book-title-lg">{this.state.title}</h2>
                        </div>
                        <div className="description">
                             <p className="description-para">{this.state.description}</p>
                        </div>
                        <div className="description">
                            Price: {this.state.price}
                        </div>
                        <div className="add-to-cart">
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, {getBookById})(BookDetails);