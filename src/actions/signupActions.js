import axios from 'axios';
import {userServiceUrl} from '../constants';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post(`${userServiceUrl}/signUp`, userData);
    }
}