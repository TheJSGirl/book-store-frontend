import React, {Component} from 'react';
import './Home.css';

class BookDetails extends Component {

    constructor(props) {
        super(props);
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
                            <p className="d">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                            </p>
                        </div>
                        <div><p>table</p></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BookDetails;