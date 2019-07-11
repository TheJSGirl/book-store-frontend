import axios from 'axios';
import {getBooks} from './book';

const baseUrl = 'http://localhost:3001/books';

export function deleteMybook(id) {
    return (dispatch) => {
        return axios.delete(`${baseUrl}/${id}`, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(e => dispatch(getBooks()))
    }
}

export function addBook(body) {
    return (dispatch) => {
        return axios.post(baseUrl,body, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        } ).then(e => dispatch(getBooks()))
    }
}