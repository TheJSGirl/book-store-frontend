import axios from 'axios';
import {DELETE_MYBOOK} from './types';
import {getBooks} from './book';

const baseUrl = 'http://localhost:3001/books';

export function deleteMybook(id) {
    return (dispatch) => {
        return axios.delete(`${baseUrl}/${id}`, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(e => dispatch(getBooks()))
    }
}