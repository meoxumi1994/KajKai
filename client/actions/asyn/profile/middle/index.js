import config from '~/config'
import { updateuserAction, updateuserData } from '~/actions/sync/updateuser'
import { fleu, flet, flem } from '~/actions/support'

export const changeLanguage = (language) => dispatch => {
    dispatch(updateuserData('LANGUAGE', { language : language }))
    fleu('/user',{
        language: language
    },{
        status: 'failed|success'
    })
    .then((response) => {
    })
}

// export const updatePhone = (phone) => dispatch => {
//     dispatch({ type: 'UPDATE_PHONE_ING', newvalue: phone })
//     fleu('/phone',{
//         phone: phone
//     },{
//         status: 'pending|used|error'
//     })
//     .then(({status}) => {
//         if(status == 'pending')
//             dispatch(updateuserAction('UPDATE_PHONE_PENDING'))
//         if(status == 'used' )
//             dispatch(updateuserAction('UPDATE_PHONE_USED'))
//         if(status == 'error')
//             dispatch(updateuserAction('UPDATE_PHONE_FAILED'))
//     })
// }
//
// export const verifyPhone = (phone, code) => dispatch => {
//     dispatch(updateuserAction('VERIFY_PHONE_ING'))
//     fleu('/verifyphone',{
//         phone: phone,
//         code: code,
//     },{
//         status: 'verified|error'
//     })
//     .then(({status}) => {
//         if(status == 'verified')
//             dispatch(updateuserData('VERIFY_PHONE_SUCCESS', {phone}))
//         if(status == 'error')
//             dispatch(updateuserAction('VERIFY_PHONE_FAILED'))
//     })
// }

export const updatePassword = (password, newpassword) => dispatch =>{
    dispatch(updateuserAction('UPDATE_PASSWORD_ING'))
    fleu('/updatepassword',{
        password: password,
        newpassword: newpassword,
    },{
        status: 'failed|success',
    })
    .then(({status}) => {
        if(status == 'failed')
            dispatch(updateuserAction('UPDATE_PASSWORD_FAILED'))
        if(status == 'success')
            dispatch(updateuserData('UPDATE_PASSWORD_SUCCESS'))
    })
}

export const updateUser = (user) => dispatch => {
    dispatch(updateuserAction('UPDATE_USER_ING'))
    console.log('123123123 123 123 123 12312')
    fleu('/user',{
        ...user
    },{
        status: 'failed|success',
        error: undefined,
    })
    .then(({status, error}) => {
        if(status == 'failed' || error)
            dispatch(updateuserAction('UPDATE_USER_FAILED'))
        if(status == 'success')
            dispatch(updateuserData('UPDATE_USER_SUCCESS', user))
    })
}

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
                dispatch(updateUser({ [type]: urlreal }))
            })
        }
        reader.readAsArrayBuffer(file)
    })
    .catch( err => console.log(err))
}
