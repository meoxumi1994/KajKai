import { flet } from '~/actions/support'
import { updateUser } from '~/actions/asyn/user'
import { updateStore } from '~/actions/asyn/store'

const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}


export const loadImage = (action, file, src) => dispatch => {
    dispatch({ type: 'LOAD_IMAGE_ING' })
    if(!file){
        file = dataURLtoFile(src,'hello.png');
    }
    if(file){
        const fileExtension = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
        flet('/awsimageurl',{
            filetype: fileExtension,
        })
        .then(({ urlload, urlreal }) => {
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = () => {
                fetch(urlload, {
                    method: 'PUT',
                    body: reader.result
                })
                .then( res => {
                    if(action.type == 'UPDATE_USER_AVATAR'){
                        dispatch(updateUser({ ...action.data, avatarUrl: urlreal }))
                    }
                    if(action.type == 'UPDATE_USER_COVER'){
                        dispatch(updateUser({ ...action.data, coverUrl: urlreal }))
                    }
                    if(action.type == 'UPDATE_STORE_AVATAR'){
                        dispatch(updateStore({ ...action.data, avatarUrl: urlreal}))
                    }
                    if(action.type == 'UPDATE_STORE_COVER'){
                        dispatch(updateStore({ ...action.data, coverUrl: urlreal }))
                    }
                    if(action.type == 'UPDATE_PRODUCR_IMAGE'){
                        dispatch({
                            ...action.data,
                            type: 'INST_ENTITY_PRODUCT_CHANGE',
                            key: 'imageUrl',
                            value: urlreal,
                        })
                    }
                    if(action.type == 'UPDATE_POST_ROW'){
                        dispatch({
                            type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW',
                            item: action.id,
                            key: 'images',
                            value: [urlreal, ...action.images]
                        })
                    }
                    if(action.type == 'UPDATE_MINOR_POST'){
                        dispatch({
                            type: 'INST_ENTITY_POST_EDIT_MINOR_POST_CHANGE',
                            key: 'images',
                            value: [urlreal, ...action.images],
                        })
                    }
                    dispatch({ type: 'LOAD_IMAGE_SUCCESS' })
                })
                .catch( error => console.log(error))
            }
        })
    }
}
