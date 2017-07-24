import { flet, fleu } from '~/actions/support'
import { targetAction, targetData } from '~/actions/sync/target'

export const getTarget = (id) => dispatch => {
    dispatch(targetAction('TARGET_GET_ING'));
    flet('/gettarget',{
        id: id
    },{
        status: 'success|failed',
        user: undefined,
        store: undefined,
    })
    .then((response) => {
        const { status, type, user, store } = response
        if(status == 'success' && user){
            dispatch(targetData('TARGET_GET_SUCCESS', { ...user, type }))
        }else if(status == 'success' && store){
            dispatch(targetData('TARGET_GET_SUCCESS', { ...store, type }))
            // dispatch({ type: 'server/JOIN_GROUPCOMMENTS',
            //     data: { id: store.mainPostId , type: 'MOSTRECENT', offset: (new Date()).getTime(),length:  10 } })
            // dispatch({ type: 'server/JOIN_STORE_POST', data: { id: store.mainPostId } })
        }else {
            dispatch(targetAction('TARGET_GET_FAILED'))
        }
    })
}

export const updateStore = (store) => dispatch => {
    dispatch(updateUser('UPDATE_STORE_ING'))
    flet('/store',{
        store: store
    },{
        status: 'success|failed'
    })
    .then(({ status }) => {
        if(status == 'success'){
            dispatch(updateUser('UPDATE_STORE_ING'))
        } else if(status == 'failed'){
            dispatch(updateUser('UPDATE_STORE_ING'))
        }
    })
}

export const updateUser = (user) => dispatch => {
    dispatch(updateuserAction('UPDATE_USER_ING'))
    fleu('/user',{
        ...user
    },{
        status: 'failed|success',
        error: undefined,
    })
    .then(({status, error}) => {
        if(status == 'failed' || error)
            dispatch(updateuserAction('UPDATE_USER_FAILED'))
        if(status == 'success')
            dispatch(updateuserData('UPDATE_USER_SUCCESS', user))
    })
}

export const getstoresellposts = (storeid, offset) => dispatch => {
    dispatch({ type: 'GET_STORE_SELL_POST_ING'})
    flet('/getstoresellposts',{
        offset: offset,
        storeid: storeid,
    },{

    })
    .then((response) => {
        dispatch({ type: 'GET_STORE_SELL_POST_SUCCESS', ...response })
    })
}

export const getstoreminorposts = (storeid, offset) => dispatch => {
    dispatch({ type: 'GET_STORE_MINOR_POST_ING'})
    flet('/getstoreminorposts',{
        offset: offset,
        storeid: storeid,
    },{

    })
    .then((response) => {
        dispatch({ type: 'GET_STORE_MINOR_POST_SUCCESS', ...response})
    })
}
