import { flet } from '~/actions/support'

export const loadImage = (ACTION_NAME, file, src) => dispatch => {
    dispatch({ type: 'LOAD_IMAGE_ING' })
    if(file){
        const fileName = file.name.split('.')[file.name.split('.').length - 2].toLowerCase()
        const fileExtension = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
        flet('/awsimageurl',{
            filetype: fileExtension,
            filename: fileName,
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
                    console.log('LOAD_IMAGE_SUCCESS', urlreal)
                    dispatch({ type: 'LOAD_IMAGE_SUCCESS', url: urlreal })
                    dispatch({ type: ACTION_NAME, url: urlreal })
                })
            }
        })
        .catch( error => console.log(error))
    }else{
        flet('/awsimageurl',{
            filetype: 'jpg',
            filename: fileName,
        })
        .then(({ urlload, urlreal }) => {
            fetch(urlload, {
                method: 'PUT',
                body: src
            })
            .then( res => {
                dispatch({ type: ACTION_NAME, url: urlreal })
            })
        })
        .catch( error => console.log(error))
    }
}
