import { authAction, authData } from '~/actions/sync/auth'
import { flet } from '../../support'

export const register = (username, email, password) => dispatch => {
    dispatch(authAction('REGISTER_ING'))
    flet('/user',{
        username : username,
        email: email,
        password: password,
    },{
        status: 'success|used|error'
    })
    .then((res) => {
        if(res.status == 'used')
            dispatch(authAction('REGISTER_ALREADY_OPEN'))
        else if(res.status == 'success')
            dispatch(authAction('REGISTER_SUCCESS'))
        else if(res.status == 'error')
            dispatch(authAction('REGISTER_FAILED'))
    })
}
