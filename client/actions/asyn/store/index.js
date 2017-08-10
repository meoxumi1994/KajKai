import { flem, flet, fleu} from '~/actions/support'

export const updateStore = (id, store) => dispatch => {
    dispatch({ type: 'UPDATE_STORE_ING'})
    fleu('/store/' + id,{
        ...store
    })
    .then(({ status, store }) => {
        if(status == 'success'){
            dispatch({ type: 'UPDATE_STORE_SUCCESS', store: store })
        }else{
            dispatch({ type: 'UPDATE_STORE_FAILED' })
        }
    })
}

export const getIntroduceStore = (id) => dispatch => {
    dispatch({ type: 'INTRODUCE_STORE_GET_ING' });
    flem('/store/'+id)
    .then((response) => {
        const { status, store } = response
        if(status == 'success'){
            dispatch({ type: 'INTRODUCE_STORE_GET_SUCCESS', store })
        }else{
            dispatch({ type: 'INTRODUCE_STORE_GET_FAILED', store })
        }
    })
}


export const getStore = (id) => dispatch => {
    dispatch({ type: 'STORE_GET_ING' });
    flem('/store/'+id)
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

//GET /imagelist/user?offset=-1
// GET /imagelist/store?offset=-1 {
//     offset: ,
//     status: 'success|failed'
//     listImage : ['','','']
// }
// GET /imagelist/postrow?offset=-1
// GET /imagelist/product?offset=-1
// GET /imagelist/minorpost?offset=-1

export const getListImage = (type, id, offset) => dispatch => {
    dispatch({ type: 'GET_PHOTO_ING' })
    flem('/imagelist/'+type+'/'+id,{
        offset: offset,
    })
    .then(({ status, listImage }) => {

        if(status == 'success'){
            dispatch({ type: 'GET_PHOTO_SUCCESS', kind : type, listImage: listImage })
        }else{
            dispatch({ type: 'GET_PHOTO_FAILED' })
        }
    })
}

export const getStatistic = (id, from, to) => dispatch => {
    dispatch({ type: 'GET_STORE_STATICTIS_ING' })
    flem('/statistics/' + id,{
        from: from,
        to: to,
    })
    .then(({ status, statistics }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_STORE_STATICTIS_SUCCESS', statistics })
        }else{
            dispatch({ type: 'GET_STORE_STATICTIS_FAILED' })
        }
    })
}
