import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS, LOGIN_CLEAR_ERROR, REGISTER_CLEAR_ERROR,
} from '../actions/users';

import {
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_ERROR
    } from '../actions/categories';

const initialState = {
    user: { status: false, data : {} },
    login: { loading: false, error: false },
    registration: { loading: false, error: false },
    category: {loading: false, error: false, data: false}
};

const reducer = (state = initialState, action) => {
    if (action.type === LOGIN_REQUEST) {
        return {
            ...state,
            login: { loading: true, error: false },
        };
    } else if(action.type === LOGIN_ERROR) {
        return {
            ...state,
            login: { loading: false, error: action.data },
        };
    } else if(action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            user: { status: 'auth', data : {...action.data.user, accessToken: action.data.token} },
            login: { loading: false, error: false },
        };
    } else if(action.type === LOGIN_CLEAR_ERROR) {
        return {
            ...state,
            login: { loading: false, error: false }
        };
    } else if(action.type === REGISTER_REQUEST) {
        return {
            ...state,
            registration: { loading: true, error: false }
        };
    } else if(action.type === REGISTER_ERROR) {
        return {
            ...state,
            registration: { loading: false, error: action.data }
        };
    } else if(action.type === REGISTER_SUCCESS) {
        return {
            ...state,
            user: { status: 'reg', data : {accessToken: action.data.token} },
            registration: { loading: false, error: false },
        };
    } else if(action.type === REGISTER_CLEAR_ERROR) {
        return {
            ...state,
            registration: { loading: false, error: false }
        };
    } else if(action.type === CATEGORY_FETCH_REQUEST) {
        return {
            ...state,
            category: {loading: true, error: false, data: false}
        };
    } else if(action.type === CATEGORY_FETCH_ERROR) {
        return {
            ...state,
            category: {loading: false, error: action.data, data: false}
        };
    } else if(action.type === CATEGORY_FETCH_SUCCESS) {
        return {
            ...state,
            category: {loading: false, error: false, data: action.data}
        };
    }
    return state;
};

export default reducer;
