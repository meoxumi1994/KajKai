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
        const { status, sellpost } = response
        if(status == 'success'){
            console.log('success')
        }else{

        }
    })
}
