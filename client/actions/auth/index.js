import config from '../../config'
import { flet } from '../support'

export const loggingIn = () => ({
    type: 'AUTH_ING'
})

export const loginResult = (type) => ({
    type: type
})

export const logIn = (loginID, password) => dispatch => {
    flet('/login',{
        loginID: loginID,
        password: password
    },{
        type: ''
    })
    .then((res)=>{

    })
}

export const register = (username, loginID, password) => dispatch => {
    flet('/register',{
        username : username,
        loginID: loginID,
        password: password,
    },{
        status: ''
    })
    .then((res)=>{
        
    })
}
