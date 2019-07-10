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
                
                <div className="book-data">
                    <div className="book-cover">
                        <img className="book-image" src={require('./image.jpg')}/>
                    </div>
                    <div className="book-description">
                        <div className="book-heading">
                            <h2 className="book-title-lg">{this.state.title}</h2>
                        </div>
                        <div className="description">
                        {/* {this.state.description} */}
                             <p className="description-para">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                             The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
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