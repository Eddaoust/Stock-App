export const CATEGORY_FETCH_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_FETCH_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FETCH_ERROR = 'CATEGORY_ERROR';

const ROOTURL = 'http://localhost:8888';
const REQUEST_HEADER = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
});

export function categoryFetchRequest() {
    return {
        type: CATEGORY_FETCH_REQUEST
    }
}

export function categoryFetchSuccess(response) {
    return {
        type: CATEGORY_FETCH_SUCCESS,
        data: response
    }
}

export function categoryFetchError(error) {
    return {
        type: CATEGORY_FETCH_ERROR,
        data: error
    }
}

export function categoryFetchProcess(user_id, token) {
    return function(dispatch) {
        dispatch(categoryFetchRequest())
        return fetch(`${ROOTURL}/api/category/${user_id}`, {
            method: 'GET',
            headers: {
                ...REQUEST_HEADER,
                'Authorization': `Bearer ${token}`
            },
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
                        dispatch(categoryFetchError(handleError))
                    })
                } else {
                    res.json()
                    .then(response => {
                        dispatch(categoryFetchSuccess(response))
                    });
                }
            })
    }
}
