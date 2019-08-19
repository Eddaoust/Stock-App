import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    } from '../actions/users';

import {
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_ERROR
    } from '../actions/categories';
//TODO reset  the error state by adding an action on mount
const initialState = {
    isAuthenticated: false,
    accessToken: '',
    loading: false,
    user: null,
    error: {
        login: false,
        registration: false,
        category: false
    },
};

const reducer = (state = initialState, action) => {
    if (action.type === LOGIN_REQUEST) {
        return {
            ...state,
            loading: true
        };
    } else if(action.type === LOGIN_ERROR) {
        return {
            ...state,
            loading: false,
            error: {
                login: action.data,
                registration: false,
                category: false
            }
        };
    } else if(action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            accessToken: action.data.token,
            user: action.data.user,
            error: {
                login: false,
                registration: false,
                category: false
            }
        };
    } else if(action.type === REGISTER_REQUEST) {
        return {
            ...state,
            loading: true,
        };
    } else if(action.type === REGISTER_ERROR) {
        return {
            ...state,
            loading: false,
            error: {
                login: false,
                registration: action.data,
                category: false
            }
        };
    } else if(action.type === REGISTER_SUCCESS) {
        return {
            ...state,
            loading: false,
            accessToken: action.data.token,
            error: {
                login: false,
                registration: false,
                category: false
            },
            isRegister: true
        };
    } else if(action.type === CATEGORY_FETCH_REQUEST) {
        return {
            ...state,

        };
    } else if(action.type === CATEGORY_FETCH_ERROR) {
        return {
            ...state,

        };
    } else if(action.type === CATEGORY_FETCH_SUCCESS) {
        console.log(action.data)
        return {
            ...state,

        };
    }
    return state;
};

export default reducer;
