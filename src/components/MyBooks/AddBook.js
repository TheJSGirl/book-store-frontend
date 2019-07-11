import React, {Component} from 'react';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            authors: '',
            description: ''
        }
    }

    render() {
        return (
            <div className="profile-detail">
            <div className="profile-row">
                <label className="l">Title</label>
                <input 
                    className='i'
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className="l">Description</label>
                <input 
                    className='i'
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>Price</label>
                <input
                    className='i' 
                    type="text"
                    name="confirmPassword"
                    value={this.state.price}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="profile-row">
                <label className='l'>Authors</label>
                <input
                    className='i' 
                    type="text"
                    name="authors"
                    value={this.state.authors}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="btn">
                <button onClick={this.handleChangePassword} className="btn-primary">Confirmed</button>

            </div>
        </div>
        )
    }

}

export default AddBook;