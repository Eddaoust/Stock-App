import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/users';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === LOGIN_REQUEST) {
        return {
            ...state,
            loading: true
        };
    } else if(action.type === LOGIN_ERROR) {
        console.log(action.data)
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
            error: null
        };
    }
    return state;
};

export default reducer;
