import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:'',
    user: {}
};
export default (state = initialState, action = {}) => {
    switch(action.type) {

        case SET_CURRENT_USER: 
            return {
                isAuthenticated: !!action.user,
                user: action.user
            }

        default: return state;
    }
}