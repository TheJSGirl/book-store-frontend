import axios from 'axios';
import {USER_DATA} from './types'

export function getUserdata() {
    return dispatch => {
        return axios.get('http://localhost:3000/users/', {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=> dispatch({type: USER_DATA, payload: data.data}));
    }
}