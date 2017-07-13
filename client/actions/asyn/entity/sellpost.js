import { flet } from '~/actions/support'

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
