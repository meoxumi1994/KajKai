import { flem } from '~/actions/support'

export const getContactUser = (offset, id, length) => dispatch => {
    dispatch({ type: 'GET_CONTACT_USER_ING', id: id })
    flem('/groupcomment/user', {
        offset: offset,
        length: length,
    }).then(({ status, ...anotherInfo }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_USER_SUCCESS', id: id, ...anotherInfo })
        }else{
            dispatch({ type: 'GET_CONTACT_USER_FAILED', id: id})
        }
    })
}

export const getContactStore = (offset, id, length) => dispatch => {
    dispatch({ type: 'GET_CONTACT_STORE_ING', id: id})
    flem('/groupcomment/store/'+id, {
        offset: offset,
        length: length,
        status: 'received',
    }).then(({ status, ...anotherInfo }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_STORE_SUCCESS', id: id, ...anotherInfo })
        }else{
            dispatch({ type: 'GET_CONTACT_STORE_FAILED', id: id})
        }
    })
}
