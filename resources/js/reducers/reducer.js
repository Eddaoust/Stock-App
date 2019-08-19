import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS} from '../actions/users';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    loading: false,
    error: false,
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
            error: action.data
        };
    } else if(action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            accessToken: action.data.token,
            error: {}
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
            error: action.data
        };
    } else if(action.type === REGISTER_SUCCESS) {
        return {
            ...state,
            loading: false,
            accessToken: action.data.token,
            error: false,
            isRegister: true
        };
    }
    return state;
};

export default reducer;
