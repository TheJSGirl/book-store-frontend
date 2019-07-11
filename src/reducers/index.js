import {SET_CURRENT_USER, USER_DATA, UPDATED_DATA, BOOKS, DELETE_MYBOOK} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:'',
    user: {},
    userDetails:{},
    books: []
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

        case BOOKS: 
            return {
                ...state,
                books: [...action.payload]
            }
        case DELETE_MYBOOK: 
            return {
                ...state,
                books: [...action.payload]
            }

        default: return state;
    }
}