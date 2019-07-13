import {SET_CURRENT_USER, USER_DATA, UPDATED_DATA, BOOKS, DELETE_MYBOOK} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:'',
    user: {},
    userDetails:{},
    bookInfo: {}
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
                bookInfo: {books: action.payload.books, total: action.payload.total}, 
            }
    

        default: return state;
    }
}