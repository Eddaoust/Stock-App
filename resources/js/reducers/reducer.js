import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REGISTER_TOGGLE_STATUS} from '../actions/users';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    loading: false,
    user: null,
    error: {
        login: false,
        registration: false
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
                registration: false
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
                registration: false
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
                registration: action.data
            }
        };
    } else if(action.type === REGISTER_SUCCESS) {
        return {
            ...state,
            loading: false,
            accessToken: action.data.token,
            error: {
                login: false,
                registration: false
            },
            isRegister: true
        };
    }
    return state;
};

export default reducer;
