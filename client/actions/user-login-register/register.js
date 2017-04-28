import config from '../../config'
import { flet } from '../support'

import {registerResult} from './index.js'

export const register = (username, loginID, password) => dispatch => {
    dispatch(registerResult('REGISTER_ING'))
    flet('/register',{
        username : username,
        loginID: loginID,
        password: password,
    },{
        status: 'failed|already registered|success'
    })
    .then((res) => {
        if(res.status == 'failed')
            dispatch(registerResult('REGISTER_FAILED'))
        if(res.status == 'already registered')
            dispatch(registerResult('REGISTER_ALREADY'))
        if(res.status == 'success')
            dispatch(registerResult('RESIGTER_SUCCESS'))
    })
}
