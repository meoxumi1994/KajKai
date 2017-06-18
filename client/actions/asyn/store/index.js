import { flem, flet } from '~/actions/support'

export const getStore = (id) => dispatch => {
    dispatch({ type: 'STORE_GET_ING' });
    flem('/getstore',{
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
