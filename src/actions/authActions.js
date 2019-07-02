import {SET_CURRENT_USER} from './types';
export function authAction(token, user= {}) {
    return {
        type: SET_CURRENT_USER,
        token,
        user
    }
}