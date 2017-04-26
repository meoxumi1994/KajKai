import config from '../../config'
import { flet } from '../support'

export const loggingIn = () => ({
    type: 'AUTH_ING'
})

export const loginResult = (type) => ({
    type: type
})

export const who = (loginID) => {
    flet('/who',{
    },{
        username: ''
    })
}

export const findLoginID = (loginID) => {
    flet('/findLoginID',{
        loginID: loginID
    },{
        type: 'YES|NO'
    })
}

export const logIn = (loginID, password) => dispatch => {
    flet('/login',{
        loginID: loginID,
        password: password
    },{
        type: 'SUCCESS|FAILED'
    })
}

export const register = (username, loginID, password) => dispatch => {
    flet('/register',{
        username : username,
        loginID: loginID,
        password: password,
    },{
        status: 'wrong form|has already registered|success, verify now'
    })
}
