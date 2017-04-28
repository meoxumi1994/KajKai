import config from '../config'
import { flem } from './support'

export const whoResult = (type, username) =>({
    type: type,
    username: username
})

export const onWho = () => dispatch => {
    dispatch(whoResult('WHO_ING',undefined))
    flem('/who', {
        username: undefined
    })
    .then((res) => {
        if(res.username == undefined ){
            dispatch(whoResult('WHO_FAILED',undefined))
        }else{
            console.log('WHO_SUCCESS',res.username)
            dispatch(whoResult('WHO_SUCCESS',res.username))
        }
    })
}
