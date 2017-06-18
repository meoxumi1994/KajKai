import config from '../../config'
import { authAction, authData } from '../sync/auth'
import { flem } from '../support'

export const onWho = () => dispatch => {
    dispatch(authAction('WHO_ING'))
    flem('/who')
    .then((response) => {
        if(response.username){
            dispatch(authData('WHO_SUCCESS',response))
        }else{
            dispatch(authAction('WHO_FAILED'))
        }
    })
}
