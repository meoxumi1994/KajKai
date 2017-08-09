import { flem, flet } from '~/actions/support'

export const createNewInterest = (id, position, time) => dispatch => {
    dispatch({ type: 'CREATE_SUB_INTEREST_ING'})
    flet('/interest',{
        categoryId: id,
        position: position,
        time: (new Date()).getTime(),
    }).then(({ status, ...anotherData }) => {
        if(status == 'success'){
            dispatch({ type: 'CREATE_SUB_INTEREST_SUCCESS', ...anotherData })
        }else{
            dispatch({ type: 'CREATE_SUB_INTEREST_FAILED'})
        }
    })
}

export const getInterest = (offset) => dispatch => {
    dispatch({ type: 'GET_SUB_INTEREST_ING'})
    flem('/interest',{
        offset: offset,
    }).then(({ status, offset, interests }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_SUB_INTEREST_SUCCESS', offset, interests })
        }else{
            dispatch({ type: 'GET_SUB_INTEREST_FAILED' })
        }
    })
}
