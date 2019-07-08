import axios from 'axios';
import {BOOKS} from './types';

const baseUrl = 'http://localhost:3001/books/'
export function getBooks() {
    return dispatch => {
        return axios.get(baseUrl, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=> dispatch({type: BOOKS, payload: data.data}));
    }
}