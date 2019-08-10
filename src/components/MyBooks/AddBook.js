import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: {
                value:'',
                isValid: true,
                message:'Title is not correct'
            },
            price: {
                value: '',
                isValid: true,
                message:'Price is not correct'
            },
            author: {
                value: '',
                isValid: true,
                message:'Author is not correct'
            },
            description: {
                value: '',
                isValid: true,
                message:'Description is not correct'
            },
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleOnchange(event) {
        console.log(event.keycode,'hello',typeof event.target.value,event.target.name)
        let isValidField = true;
        let stringRegex  = /^([a-zA-Z]{1,})$/  ;
        if(event.target.name === 'title') {
            if(!stringRegex.test(event.target.value)) {
                isValidField = false
            }
        }

        event.preventDefault();
        this.setState({[event.target.name]: {value:event.target.value,isValid:isValidField,message:this.state[event.target.name].message}})

    }

    handleSubmit(e) {
       
        e.preventDefault();

        for(const key in this.state ){
            console.log(this.state[key].isValid,"keysss")
            if(!this.state[key].isValid||!this.state[key].value){
                alert('please fill required parameters')
                break;
            }
        }
        
       if(this.props.showForm) {
            const data = {
                body: this.state,
                bookId: this.props.showForm.bookId
            }
            this.props.editBook(data)
            this.props.allBooks();
            this.props.toggleForm();
            window.location.reload();
        } else {
            const data = {
                title: this.state.title.value,
                price: this.state.price.value,
                author: this.state.author.value,
                description: this.state.description.value,
            }
            this.props.addBook(data);
            this.props.allBooks();
            this.props.handleToggle();
            window.location.reload();
        }
    
    }
    componentDidMount() {
        if(this.props.showForm) {
            this.setState({title: this.props.showForm.book.title || '',
                price: this.props.showForm.book.price || '',
                description: this.props.showForm && this.props.showForm.book && this.props.showForm.book.description,
                author: this.props.showForm.book.author || '',
                })
        }
     
    }

    render() {
        
        let style={'display' : this.state.title.isValid?'none':'block'};
    
           let form =  
           <form onSubmit={this.handleSubmit}><div className="profile-detail">
            <div className="profile-row">
                <label className="l">Title</label>
                <input 
                    className='i'
                    type="text"
                    name="title"
                    value={this.state.title.value}
                    onChange={this.handleOnchange}
                    onBlur={this.handleOnchange}
                    
                />
            </div>
            <div style={style}>
                <label className="l">{this.state.title.message}</label>
                </div>
            <div className="profile-row">
                <label className="l">Description</label>
                <input 
                    className='i'
                    type="text"
                    name="description"
                    value={this.state.description.value} 
                    onChange={this.handleOnchange}
                    
                />
            </div>
            <div className="profile-row">
                <label className='l'>Price</label>
                <input
                    className='i' 
                    type="text"
                    name="price"
                    value={this.state.price.value}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="profile-row">
                <label className='l'>Authors</label>
                <input
                    className='i' 
                    type="text"
                    name="author"
                    value={this.state.author.value}
                    onChange={this.handleOnchange}

                />
            </div>
            <div className="btn">
                <input type="submit"  className="btn-primary"/>

            </div>
        </div></form>;
        return form;

        
    }

}

export default AddBook;