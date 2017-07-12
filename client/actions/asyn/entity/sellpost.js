import { flet } from '~/actions/support'

export const postSellPost = (sellpost) => dispatch => {
    dispatch({ type: 'CREATE_SELL_POST_ING'})
    flet('/sellpost',{
        ...sellpost,
    })
    .then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'CREATE_SELL_POST_SUCCESS'})
        }else {
            dispatch({ type: 'CREATE_SELL_POST_FAILED'})
        }
    })
}
