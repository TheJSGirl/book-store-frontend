import axios from 'axios';
import  setAuthorization from '../utils';
import {authAction} from './authActions';


export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorization(false);
        dispatch(authAction({}));
        window.location.href ='/login';
    }
}

export function login(userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/users/signIn', userData);
    }

}