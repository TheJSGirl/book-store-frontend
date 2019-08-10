import axios from 'axios';
import {getBooks} from './book';
import {SHOW_EDIT_FORM} from './types';
import {bookServiceUrl} from '../constants';


export function deleteMybook(id) {
    return (dispatch) => {
        return axios.delete(`${bookServiceUrl}/${id}`, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(e => {
            dispatch(getBooks())
            return window.location.reload()
        }
        )
    }
}

export function addBook(body) {
    return (dispatch) => {
        return axios.post(bookServiceUrl, body, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        } ).then(e => dispatch(getBooks()))
    }
}


export function myBook() {
    return (dispatch) => {
        return axios.get(`${bookServiceUrl}`, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        } ).then(e => dispatch(getBooks()))
    }
}

export function showEditForm(data) {
    return {
        type: SHOW_EDIT_FORM,
        payload: data,

    }
}

export function editBook(data) {
    return (dispatch) => {
        return axios.patch(`${bookServiceUrl}/${data.bookId}`,data.body, {
            headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        } ).then(e => dispatch(getBooks()))
    }
}