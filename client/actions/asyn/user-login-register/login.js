import { authAction, authData} from '../../sync/auth'
import { flet,flem } from '../../support'
import { onWho } from '~/actions/asyn/app'

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
    .then(({ user, tokenId }) => {
        if(user.username){
            dispatch(authData('LOGIN_SUCCESS', user))
            dispatch(onWho())
            dispatch({ type: 'server/sendToken', tokenId: tokenId })
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
    .then(({ user, tokenId }) => {
        if(user){
            dispatch(authData('LOGIN_SUCCESS', user))
            dispatch(onWho())
            dispatch({ type: 'server/sendToken', tokenId: tokenId })
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
    .then(({ user, tokenId }) => {
        if(user.username){
            dispatch(authData('LOGIN_SUCCESS', user))
            dispatch(onWho())
            dispatch({ type: 'server/sendToken', tokenId: tokenId })
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

export const forgotPassword = () => dispatch => {
  console.log('forgotPassword');
}
