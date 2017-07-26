import { flem, fleu } from '~/actions/support'

export const getNotification = (offset) => dispatch => {
    dispatch({ type: 'GET_NOTIFICATION_ING'})
    flem('/notification',{
        offset: offset
    }).then(({ status, ...anotherData }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_NOTIFICATION_SUCCESS', ...anotherData })
        }else{
            dispatch({ type: 'GET_NOTIFICATION_FAILED'})
        }
    })
}

export const updateNotification = (topId) => dispatch => {
    dispatch({ type: 'UPDATE_NOTIFICATION_ING'})
    flem('/notification',{
        topId: topId,
    }).then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'UPDATE_NOTIFICATION_SUCCESS' })
        }else{
            dispatch({ type: 'UPDATE_NOTIFICATION_FAILED'})
        }
    })
}
