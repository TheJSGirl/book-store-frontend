import {SET_CURRENT_USER, USER_DATA} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:'',
    user: {},
    userDetails:{}
};
export default (state = initialState, action = {}) => {
    switch(action.type) {

        case SET_CURRENT_USER: 
            return {
                isAuthenticated: !!action.user,
                token: action.token,
                user: action.user
            }
        case USER_DATA:
            return {
                ...state,
                userDetails:action.payload,
            }

        default: return state;
    }
}