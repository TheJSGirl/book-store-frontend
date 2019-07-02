import {SET_CURRENT_USER} from './types';
export function authAction(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}