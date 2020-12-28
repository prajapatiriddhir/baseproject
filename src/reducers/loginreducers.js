import {authConstants} from '../constant/auth.constant'
const initialState = {
    user: null,
    user_request: false,
    user_error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST_ACTION:
            return {
                ...state,
                user_request: true,
            }
        case authConstants.LOGIN_SUCCESS_ACTION:
            return {
                ...state,
                user_request: false,
                user_error: null,
                user: action.payload,
            }
        case authConstants.LOGIN_ERROE_ACTION:
            return {
                ...state,
                user_request: false,
                user_error: action.payload,
                user: null,
            }
        default:
            return {...state }
    }
}