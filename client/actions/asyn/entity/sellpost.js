import { flet, flem } from '~/actions/support'

export const postSellPost = (sellpost) => dispatch => {
    dispatch({ type: 'CREATE_SELL_POST_ING'})
    flet('/sellpost',{
        ...sellpost,
    })
    .then(({ status, sellpost }) => {
        if(status == 'success'){
            dispatch({ type: 'CREATE_SELL_POST_SUCCESS', sellpost: sellpost})
        }else {
            dispatch({ type: 'CREATE_SELL_POST_FAILED'})
        }
    })
}

export const getSellPost = (id) => dispatch => {
    dispatch({ type: 'GET_SELL_POST_ING'})
    flem('/sellpost/'+id,{})
    .then(({ status, sellpost }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_SELL_POST_SUCCESS', sellpost: sellpost})
        }else {
            dispatch({ type: 'GET_SELL_POST_FAILED'})
        }
    })
}
