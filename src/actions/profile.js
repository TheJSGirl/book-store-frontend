import axios from 'axios';
import {USER_DATA,  UPDATED_DATA} from './types'

const baseUrl = 'http://localhost:3000/users/'
export function getUserdata() {
    return dispatch => {
        return axios.get(baseUrl, {
              headers: {Authorization: `bearer ${localStorage.jwtToken}`}
        }).then(({data})=> dispatch({type: USER_DATA, payload: data.data}));
    }
}

export function updateUser(body) {
    return dispatch => {
        return axios.patch(baseUrl,{
            headers:{
                Authorization: `bearer ${localStorage.jwtToken}`
            },
            body
        
        }).then((res) => dispatch({
            type: UPDATED_DATA,
            payload: res
        }))
    }
}