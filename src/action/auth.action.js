import {authConstants} from '../constant/auth.constant'
import {commonFunction} from '../utilities'


export const authActions = {
    login,
    register
};


function login(data){
    return dispatch =>{
        dispatch(dispatchFunction({
            type:authConstants.LOGIN_REQUEST_ACTION,
            data:null
        }))
    }
}