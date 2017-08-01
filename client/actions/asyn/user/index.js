import { flem, flet, fleu } from '~/actions/support'

export const getInterest = ( id, offset ) => dispatch => {
    dispatch({ type: 'GET_INTEREST_ING'})
    return flem('/post/user/' + id, {
        offset: offset,
    })
    .then(({ data, status }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_INTEREST_SUCCESS', data: data })
        }else{
            dispatch({ type: 'GET_INTEREST_FAILED' })
        }
    })
}

export const getUser = (id) => dispatch => {
    dispatch({ type: 'USER_GET_ING' });
    return flem('/user/'+id)
    .then((response) => {
        const { status, user } = response
        if(status == 'success'){
            dispatch({ type: 'USER_GET_SUCCESS', user })
            dispatch(getInterest( id, -1 ))
        }else{
            dispatch({ type: 'USER_GET_FAILED', user })
        }
    })
}

export const updateUser = (user) => dispatch => {
    dispatch({ type: 'UPDATE_USER_ING'})
    return fleu('/user',{
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
