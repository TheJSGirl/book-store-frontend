import axios from 'axios';
import {USER_DATA,  UPDATED_DATA} from './types'
import {userServiceUrl} from '../constants';

export function getUserdata() {
    return dispatch => {
        return axios.get(userServiceUrl, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=> dispatch({type: USER_DATA, payload: data.data}));
    }
}

export function updateUser(data) {
    return dispatch => {
        return axios.patch(userServiceUrl,data ,{
            headers:{
                Authorization: `bearer ${localStorage.jwtToken}`
            }
        }).then((res) => dispatch({
            type: UPDATED_DATA,
            payload: res
        }))
    }
}