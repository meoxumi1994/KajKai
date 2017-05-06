import config from '../../config'
import { authAction, authData } from '../sync/auth'
import { flem } from '../support'

export const onWho = () => dispatch => {
    dispatch(authAction('WHO_ING'))
    flem('/who', {
        username: undefined,
        imageUrl: undefined,
        address: undefined,
        phone: undefined,
    })
    .then((response) => {
        if(response.username){
            dispatch(authData('WHO_SUCCESS',response))
        }else{
            dispatch(authAction('WHO_FAILED'))
        }
    })
}
