import { flem, flet } from '~/actions/support'

export const getStore = (id) => dispatch => {
    dispatch({ type: 'STORE_GET_ING' });
    flem('/store',{
        id: id,
    })
    .then((response) => {
        const { status, store } = response
        if(status == 'success'){
            dispatch({ type: 'STORE_GET_SUCCESS', store })
        }else{
            dispatch({ type: 'STORE_GET_FAILED', store })
        }
    })
}

export const getSellPost = (storeid, offset) => dispatch => {
    dispatch({ type: 'GET_SELLPOST_FROM_STORE_ING'})
    flem('/sellpost/store/' + storeid,{
        offset: offset,
    })
    .then((response) => {
        const { status, offset, sellposts } = response
        if(status == 'success'){
            dispatch({ type: 'GET_SELLPOST_FROM_STORE_SUCCESS', offset, sellposts })
        }else{
            dispatch({ type: 'GET_SELLPOST_FROM_STORE_FAILED'})
        }
    })
}

export const getMinorPost = (storeid, offset) => dispatch => {
    dispatch({ type: 'GET_MINORPOST_FROM_STORE_ING'})
    flem('/minorpost/store/' + storeid,{
        offset: offset,
    })
    .then((response) => {
        const { status, offset, minorposts } = response
        if(status == 'success'){
            dispatch({ type: 'GET_MINORPOST_FROM_STORE_SUCCESS', offset, minorposts })
        }else{
            dispatch({ type: 'GET_MINORPOST_FROM_STORE_FAILED'})
        }
    })
}
