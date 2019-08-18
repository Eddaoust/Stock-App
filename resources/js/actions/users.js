export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const FETCH_USER = 'FETCH_USER';

const ROOTURL = 'http://localhost:8888';
const REQUEST_HEADER = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
});

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        data: token
    };
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        data: error
    }
}

export function loginProcess(formValues) {
    return function(dispatch) {
        dispatch(loginRequest())
        return fetch(`${ROOTURL}/api/login`, {
            method: 'POST',
            headers: REQUEST_HEADER,
            body: JSON.stringify(formValues)
        })
            .then(res => {
                if (res.status !== 200) {
                    const handleError = {
                        status: res.status,
                        text: res.statusText,
                        data: ''
                    };
                    res.json()
                        .then(error => {
                            handleError.data = error;
                            dispatch(loginError(handleError))
                        })
                } else {
                    res.json()
                        .then(response => dispatch(loginSuccess(response)));
                }
            })
    }
}
