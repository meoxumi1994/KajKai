import { flet } from '~/actions/support'
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
    .then(({ status, type, user, store }) => {
        if(status == 'success' && user){
            dispatch(targetData('TARGET_GET_SUCCESS', { ...user, type }))
        }else if(status == 'success' && store){
            dispatch(targetData('TARGET_GET_SUCCESS', { ...store, type }))
        }else {
            dispatch(targetAction('TARGET_GET_FAILED'))
        }
    })
}

export const updateStore = (store) => dispatch => {
    dispatch(updateUser('UPDATE_STORE_ING'))
    flet('/updatestore',{
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
    fleu('/updateuser',{
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
