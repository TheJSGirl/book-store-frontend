import React, {Component} from 'react';

class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.userDetails.username,
            email: this.props.userDetails.email,
            username: this.props.userDetails.username,
            isEditing: false
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});

    }

    handleToggle() {
        this.setState({isEditing: true})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.setState({isEditing: false})
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result =  <div>
                    <form onSubmit={this.handleSubmit}>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnchange}
                    />
                    <label for="email">Email</label>
                    <input 
                        type="emai"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnchange}

                    />
                    <label for="username">Username</label>
                    <input 
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnchange}

                    />

                    <button>Save</button>
                    
            </form>
            </div>
        }else {
            result = <button onClick={this.handleToggle}>Edit</button>
        }
        return result;
    }

}

export default Edit;