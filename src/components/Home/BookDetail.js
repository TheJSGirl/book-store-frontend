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
        this.props.getBookById(id).then(({data}) => console.log(data))
    }

    render() {

        return (
            <div className="book-details">
                <div className="book-heading">
                    <h1>Book Title...</h1>
                </div>
                <div className="book-data">
                    <div className="book-cover">
                        <img className="book-image" src={require('./image.jpg')}/>
                    </div>
                    <div className="book-description">
                        <div className="description">
                            <p >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                             Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                            </p>
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