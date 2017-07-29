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
