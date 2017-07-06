import { flem, flet } from '~/actions/support'

export const getUser = (id) => dispatch => {
    dispatch({ type: 'USER_GET_ING' });
    flem('/user/'+id)
    .then((response) => {
        const { status, user } = response
        if(status == 'success'){
            dispatch({ type: 'USER_GET_SUCCESS', user })
        }else{
            dispatch({ type: 'USER_GET_FAILED', user })
        }
    })
}
