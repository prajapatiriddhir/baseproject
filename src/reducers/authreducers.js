import {authConstants} from '../constant/auth.constant'

const initialState = {
    user: null,
    user_request: false,
    user_error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.REGISTER_REQUEST_ACTION:
            return {
                ...state,
                user_request: true,
            }
        case authConstants.REGISTER_SUCCESS_ACTION:
            return {
                ...state,
                user_request: false,
                user_error: null,
                user: action.payload,
            }
        case authConstants.REGISTER_ERROR_ACTION:
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