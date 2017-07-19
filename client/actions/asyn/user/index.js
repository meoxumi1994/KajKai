import { flem, flet, fleu } from '~/actions/support'

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

export const updateUser = (user) => dispatch => {
    dispatch({ type: 'UPDATE_USER_ING'})
    fleu('/user',{
        ...user
    })
    .then(({ status, user }) => {
        if(status == 'success'){
            dispatch({ type: 'UPDATE_USER_SUCCESS', user: user })
        }else{
            dispatch({ type: 'UPDATE_USER_FAILED' })
        }
    })
}
