import { flem, flet } from '~/actions/support'

export const getUser = (id) => dispatch => {
    dispatch({ type: 'USER_GET_ING' });
    flem('/user/'+id)
    .then((response) => {
        const { status, user } = response
        if(status == 'success'){
            console.log('user ', user);
            dispatch({ type: 'USER_GET_SUCCESS', user })
            dispatch({ type: 'CHAT_USER', user})
        }else{
            dispatch({ type: 'USER_GET_FAILED', user })
        }
    })
}
