import config from '../../config'
import { authAction, authData } from '../sync/auth'
import { flem } from '../support'

export const onWho = () => dispatch => {
    // console.log('ON_WHO ON_WHO ON_WHO')
    dispatch(authAction('WHO_ING'))
    flem('/user')
    .then((response) => {
        if(response.user){
            if(response.user.numUnreaded > 0){
                if(document.title.split(")").length > 1){
                    document.title = '(' + response.user.numUnreaded + ')' + document.title.split(")")[1]
                }else {
                    document.title = '(' + response.user.numUnreaded + ') ' + document.title
                }
            }
            dispatch(authData('WHO_SUCCESS',response.user))
            dispatch({ type: 'server/sendToken', tokenId: response.tokenId })
        }else{
            dispatch(authAction('WHO_FAILED'))
            dispatch({ type: 'server/sendToken', tokenId: null })
        }
    })
}
