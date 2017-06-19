import { flem, flet } from '~/actions/support'

export const getUser = (id) => dispatch => {
    console.log('getUser', id)
    dispatch({ type: 'USER_GET_ING' });
    flem('/user',{
        id: id,
    })
    .then((response) => {
        const { status, user } = response
        console.log('getUser', { status, user })
        if(status == 'success'){
            dispatch({ type: 'USER_GET_SUCCESS', user })
        }else{
            dispatch({ type: 'USER_GET_FAILED', user })
        }
    })
}
