import { flem, fleu } from '~/actions/support'

export const getNotification = (offset, length) => dispatch => {
    dispatch({ type: 'GET_NOTIFICATION_ING'})
    flem('/notification',{
        offset: offset,
        length: length,
    }).then(({ status, ...anotherData }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_NOTIFICATION_SUCCESS', ...anotherData })
        }else{
            dispatch({ type: 'GET_NOTIFICATION_FAILED'})
        }
    })
}

export const updateNotification = (id) => dispatch => {
    dispatch({ type: 'UDPATE_NOTIFICATION_ING'})
    fleu('/notification',{
        id: id,
    }).then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'UDPATE_NOTIFICATION_SUCCESS' })
            dispatch({ type: 'INST_ENTITY_NOTIFICATION_CHANGE', id: id, key: 'isclick', value: true })
        }else{
            dispatch({ type: 'UDPATE_NOTIFICATION_FAILED'})
        }
    })
}
