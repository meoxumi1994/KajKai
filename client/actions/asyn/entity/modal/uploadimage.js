import config from '~/config'
import { updateuserAction, updateuserData } from '~/actions/sync/updateuser'
import { updateUser } from '~/actions/asyn/profile/middle'
import { flet } from '~/actions/support'
import { uploadingImages } from '~/actions/asyn/chat/actions'

export const uploadImage = (type, file) => dispatch => {
    dispatch(updateuserAction('UPDATE_USER_ING'))
    const fileName = file.name.split('.')[file.name.split('.').length - 2].toLowerCase()
    const fileExtension = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
    flet('/getawsimageurl',{
        filetype: fileExtension,
        filename: fileName,
    },{
        urlload: undefined,
        urlreal: undefined,
    })
    .then(({ urlload, urlreal }) => {
        const reader = new FileReader()
        reader.onload = () => {
            fetch(urlload, {
                method: 'PUT',
                body: reader.result
            })
            .then( res => {
              switch (type) {
                case "avatarUrl":
                  dispatch(updateUser({ [type]: urlreal }))
                  break
                case "sendImage":
                  dispatch(uploadingImages([{urlreal}]))
                  break
                default:
                  console.log('res ', res)
              }
            })
        }
        reader.readAsArrayBuffer(file)
    })
    .catch( err => console.log(err))
}
