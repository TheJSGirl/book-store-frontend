import {SET_CURRENT_USER, USER_DATA, UPDATED_DATA, BOOKS, SHOW_EDIT_FORM } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:'',
    user: {},
    userDetails:{},
    bookInfo: {},
    showForm: {
    }
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
        case SHOW_EDIT_FORM:
            return {
                ...state,
                showForm: {
                    book: action.payload.book,
                    bookId: action.payload.bookId,
                    showForm: action.payload.showForm,

                }
            }

        default: return state;
    }
}