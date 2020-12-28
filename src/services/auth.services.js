import {store} from '../store'

import {authConstants} from '../constant/auth.constant'

export const authServices = {
    login,
    register
}


function login(){
    try{store.dispatch({type:authConstants.LOGIN_REQUEST_ACTION})

    const response = await fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json",
        },
    }).then((x)=>x.json())

    store.dispatch({type:authConstants.LOGIN_SUCCESS_ACTION,paylaod:response})
} catch (err) {
    store.dispatch({type:authConstants.LOGIN_ERROR_ACTION})
}
}



/* function register(data){
    const extraHeaders = {
        "Content-Type":"application/json"
    }
} */