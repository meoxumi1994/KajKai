import { flem } from '~/actions/support'

export const getMoreLeaderComment = (typepost, offset, id) => dispatch => {
    dispatch({ type: 'GET_MORE_LEADERCOMMENT_ING'})
    flem('/groupcomment/'+typepost+'/'+id,{
        offset: offset
    }).then(({ status, ...anotherData }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_MORE_LEADERCOMMENT_SUCCESS', ...anotherData })
        }else{
            dispatch({ type: 'GET_MORE_LEADERCOMMENT_FAILED'})
        }
    })
}

export const getMoreComment = (offset, id) => dispatch => {
    dispatch({ type: 'GET_MORE_COMMENT_ING'})
    flem('/leadercomment/'+id,{
        offset: offset
    }).then(({ status, ...anotherData }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_MORE_COMMENT_SUCCESS', ...anotherData })
        }else{
            dispatch({ type: 'GET_MORE_COMMENT_FAILED' })
        }
    })
}
