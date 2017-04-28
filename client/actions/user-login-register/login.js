import config from '../../config'
import { flet } from '../support'

export const logIn = (loginID, password) => dispatch => {
    flet('/login',{
        loginID: loginID,
        password: password
    },{
        type: 'SUCCESS|FAILED'
    })
}
