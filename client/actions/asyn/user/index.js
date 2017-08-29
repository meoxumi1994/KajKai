import { flem, flet, fleu, flex } from '~/actions/support'

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

export const updatePassword = (password, newpassword) => dispatch => {
    return fleu('/password',{
        password: password,
        newpassword: newpassword,
    })
    .then(({ status }) => {
        if(status == 'success'){
            const user = { password: 'Update Success' }
            dispatch({ type: 'USER_GET_SUCCESS', user })
        }else {
            dispatch({ type: 'UPDATE_USER_FAILED' })
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
            if(document.title.split(")").length > 1){
                document.title = document.title.split(")")[0] + ') ' + user.username
            }else {
                document.title = user.username
            }
        }else{
            dispatch({ type: 'USER_GET_FAILED', user })
        }
    })
}

export const getUserOverView = (id) => dispatch => {
    dispatch({ type: 'USER_OVERVIEW_GET_ING' });
    return flem('/user/'+id)
    .then((response) => {
        const { status, user } = response
        if(status == 'success'){
            dispatch({ type: 'USER_OVERVIEW_GET_SUCCESS', user })
            dispatch(getInterest( id, -1 ))
        }else{
            dispatch({ type: 'USER_OVERVIEW_GET_FAILED', user })
        }
    })
}


export const updateUser = (user, dontDispath ) => dispatch => {
    dispatch({ type: 'UPDATE_USER_ING'})
    return fleu('/user',{
        ...user
    })
    .then(({ status, user },  ) => {
        if(status == 'success'){
            if(!dontDispath){
                dispatch({ type: 'UPDATE_USER_SUCCESS', user: user })
            }
        }else{
            dispatch({ type: 'UPDATE_USER_FAILED', user: user })
        }
    })
}

export const blockUser = (userid) => dispatch => {
    dispatch({ type: 'BLOCK_USER_ING' })
    return flet('/block',{
        userid: userid,
    })
    .then(({ status, userid, id }) => {
        if(status == 'success'){
            dispatch({ type: 'BLOCK_USER_SUCCESS', userid: userid, id: id })
        }else{
            dispatch({ type: 'BLOCK_USER_FAILED' })
        }
    })
}

export const unBlockUser = (id) => dispatch => {
    dispatch({ type: 'UN_BLOCK_USER_ING'})
    return flex('/block',{
        id: id,
    })
    .then(({ status, id }) => {
        if(status == 'success'){
            dispatch({ type: 'UN_BLOCK_USER_SUCCESS', id })
        }else{
            dispatch({ type: 'UN_BLOCK_USER_FAILED' })
        }
    })
}
