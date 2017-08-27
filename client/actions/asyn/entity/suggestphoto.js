import { flem } from '~/actions/support'

export const getListImage = (type, id, offset) => dispatch => {
    dispatch({ type: 'GET_PHOTO_SUGGEST_ING', id: id + type })
    flem('/imagelist/'+type+'/'+id,{
        offset: offset,
    })
    .then(({ status, listImage }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_PHOTO_SUGGEST_SUCCESS', id: id + type, listImage: listImage })
        }else{
            dispatch({ type: 'GET_PHOTO_SUGGEST_FAILED', id: id + type })
        }
    })
}
