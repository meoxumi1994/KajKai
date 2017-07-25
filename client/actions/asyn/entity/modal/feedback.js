import { flet, flem } from '~/actions/support'

export const feedBack = (sellpostId, content) => dispatch => {
    dispatch({ type: 'FEED_BACK_ING'})
    flet('/feedback',{
        sellpostId: sellpostId,
        content: content,
    })
    .then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'FEED_BACK_SUCCESS'})
        }else{
            dispatch({ type: 'FEED_BACK_FAILED'})
        }
    })
}
