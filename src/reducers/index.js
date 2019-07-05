import {SET_CURRENT_USER, USER_DATA, UPDATED_DATA} from '../actions/types';

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
        
        case UPDATED_DATA: 
            return {
                ...state,
                userDetails: action.payload.data.data
            }

        default: return state;
    }
}