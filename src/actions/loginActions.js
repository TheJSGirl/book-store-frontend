import axios from 'axios';

export function login(data) {
    return dispatch => {
        return axios.post('http://localhost:3000/users/signUp', this.state).then(data => console
        .log(data))
    }

}