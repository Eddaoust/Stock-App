const initialState = {
    isAuthenticated: false,
    accesToken: ''
};

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN') {
        return {
            ...state,
            isAuthenticated: action.isAuth
        };
    }
    return state;
};

export default reducer;
