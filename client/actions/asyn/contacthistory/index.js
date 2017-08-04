import { flem } from '~/actions/support'

export const getContactUser = (offset, length) => dispatch => {
    dispatch({ type: 'GET_CONTACT_USER_ING'})
    flem('/groupcomment/user', {
        offset: offset,
        length: length,
    }).then(({ status, ...anotherInfo }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_USER_SUCCESS', ...anotherInfo })
        }else{
            dispatch({ type: 'GET_CONTACT_USER_FAILED'})
        }
    })
}

export const getContactStore = (offset, id, length) => dispatch => {
    dispatch({ type: 'GET_CONTACT_STORE_ING'})
    flem('/groupcomment/store/'+id, {
        offset: offset,
        length: length,
        status: 'received',
    }).then(({ status, ...anotherInfo }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_STORE_SUCCESS', ...anotherInfo, id: id })
        }else{
            dispatch({ type: 'GET_CONTACT_STORE_FAILED'})
        }
    })
}
