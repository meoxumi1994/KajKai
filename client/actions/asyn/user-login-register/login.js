import { authAction, authData } from '../../sync/auth'
import { flet,flem } from '../../support'

export const logIn = (email, password) => dispatch => {
    dispatch(authAction('LOGIN_ING'))
    flet('/login',{
        email: email,
        password: password
    },{
        username: undefined,
        imageUrl: undefined,
        address: undefined,
        phone: undefined,
    })
    .then(({ user }) => {
        if(user.username){
            dispatch(authData('LOGIN_SUCCESS', user))
        }else{
            dispatch(authAction('LOGIN_FAILED'))
        }
    })
}

export const logInFaceBook = (tokenId) => dispatch => {
    dispatch(authAction('LOGIN_ING'))
    flet('/loginfacebook',{
        tokenId: tokenId
    },{
        tokenId: undefined,
        username: undefined,
        imageUrl: undefined,
        address: undefined,
        phone: undefined,
    })
    .then(({ user }) => {
        if(user.username){
            dispatch(authData('LOGIN_SUCCESS', user))
        }else{
            dispatch(authAction('LOGIN_FAILED'))
        }
    })
}

export const logInGoogle = (tokenId) => dispatch => {
    dispatch(authAction('LOGIN_ING'))
    flet('/logingoogle',{
        tokenId: tokenId
    },{
        username: undefined,
        imageUrl: undefined,
        address: undefined,
        phone: undefined,
    })
    .then(({ user }) => {
        if(user.username){
            dispatch(authData('LOGIN_SUCCESS', user))
        }else{
            dispatch(authAction('LOGIN_FAILED'))
        }
    })
}

export const logOut = () => dispatch => {
    flem('/logout',{
    })
    .then((response) => {

        dispatch(authAction('LOGOUT'))
    })
}
