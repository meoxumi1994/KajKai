import { flem } from '~/actions/support'

export const getContactUser = (offset) => dispatch => {
    dispatch({ type: 'GET_CONTACT_USER_ING'})
    flem('/leadercomment', {
        offset: offset
    }).then(({ status, leadercomments }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_USER_SUCCESS', leadercomments })
        }else{
            dispatch({ type: 'GET_CONTACT_USER_FAILED'})
        }
    })
}

export const getContactStore = (offset, id) => dispatch => {
    dispatch({ type: 'GET_CONTACT_STORE_ING'})
    flem('/leadercomment/store/'+id, {
        offset: offset
    }).then(({ status, leadercomments }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_CONTACT_STORE_SUCCESS', leadercomments })
        }else{
            dispatch({ type: 'GET_CONTACT_STORE_FAILED'})
        }
    })
}
