import axios from 'axios';
import {BOOKS} from './types';

const baseUrl = 'http://localhost:3001/books';
export function getBooks() {
    return dispatch => {
        return axios.get('http://localhost:3001/books?limit=100&skip=10', {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=> dispatch({type: BOOKS, payload: data.data}));
    }
}

export function getBookById(id) {
    return dispatch => {
        return axios.get(`${baseUrl}/${id}`, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        });
    }
}