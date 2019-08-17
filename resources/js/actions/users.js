export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const FETCH_USER = 'FETCH_USER';

const ROOTURL = 'http://localhost:8888';
const REQUEST_HEADER = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
});

export function loginUser(formValues) {
    const request = fetch(`${ROOTURL}/api/login`, {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(formValues)
    });

    return {
        type: LOGIN,
        data: request
    };
}
