import axios from 'axios';
import {BOOKS} from './types';
import {bookServiceUrl} from '../constants';

export function getBooks() {
    return dispatch => {
        return axios.get(bookServiceUrl, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=>dispatch({type: BOOKS, payload: data.data}));
    }
}

export function getBookById(id) {
    return dispatch => {
        return axios.get(`${bookServiceUrl}/${id}`, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        });
    }
}