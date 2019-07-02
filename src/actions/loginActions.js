import axios from 'axios';

export function login(userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/users/signIn', userData).then(data => console
        .log(data))
    }

}