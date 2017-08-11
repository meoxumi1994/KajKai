import { flet, flem, fleu, flex } from '~/actions/support'

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

export const putSellPost = (sellpost) => dispatch => {
    dispatch({ type: 'EDIT_SELL_POST_ING' })
    fleu('/sellpost', {
        ...sellpost
    }).then(({ status, sellpost }) => {
        if(status == 'success'){
            dispatch({ type: 'EDIT_SELL_POST_SUCCESS', sellpost: sellpost })
        }else{
            dispatch({ type: 'EDIT_SELL_POST_FAILED' })
        }
    })
}

export const deteleSellPost = (id) => dispatch => {
    dispatch({ type: 'DELETE_SELL_POST_ING' })
    flex('/sellpost', {
        sellpostid: id,
    }).then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'DELETE_SELL_POST_SUCCESS' })
        }else{
            dispatch({ type: 'DELETE_SELL_POST_FAILED' })
        }
    })
}

export const turnNotify = (id, turnotify) => dispatch => {
    dispatch({ type: 'TURN_NOTIFY_ING' })
    fleu('/turnnotify/'+id,{
        turnotify: turnotify,
    })
    .then(({ status, id, turnotify}) => {
        if(status == 'success'){
            dispatch({ type: 'TURN_NOTIFY_SUCCESS'})
            dispatch({ type: 'INST_ENTITY_SELL_POST_CHANGE', key: 'turnotify', value: turnotify })
        }else{
            dispatch({ type: 'TURN_NOTIFY_FAILED'})
        }
    })
}
