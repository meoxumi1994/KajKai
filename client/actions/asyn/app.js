import config from '../../config'
import { authAction, authData } from '../sync/auth'
import { flem } from '../support'

export const onWho = () => dispatch => {
    // console.log('ON_WHO ON_WHO ON_WHO')
    dispatch(authAction('WHO_ING'))
    flem('/user')
    .then((response) => {
        if(response.user){
            dispatch(authData('WHO_SUCCESS',response.user))
            dispatch({ type: 'server/sendToken', tokenId: response.tokenId })
        }else{
            dispatch(authAction('WHO_FAILED'))
        }
    })
}
