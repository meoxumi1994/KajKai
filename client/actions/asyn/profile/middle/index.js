import config from '~/config'
import { updateuserAction, updateuserData } from '~/actions/sync/updateuser'
import { fleu } from '~/actions/support'

export const changeLanguage = (language) => dispatch => {
    dispatch(updateuserData('LANGUAGE', { language : language }))
    fleu('/updateuser',{
        language: language
    },{
        status: 'failed|success'
    })
    .then((response) => {
    })
}

export const verifyPhone = (phone) => dispatch => {
    dispatch(updateuserAction('UPDATE_PHONE_ING'))
    fleu('/updatephone',{
        phone: phone
    },{
        status: 'pending|used|error'
    })
    .then(({status}) => {
        if(status == 'pending')
            dispath(updateuserAction('UPDATE_PHONE_PENDING'))
        if(status == 'used' )
            dispath(updateuserAction('UPDATE_PHONE_USED'))
        if(status == 'error')
            dispath(updateuserAction('UPDATE_PHONE_FAILED'))
    })
}

export const updatePhone = (phone, code) => dispatch => {
    dispatch(updateuserAction('VERIFY_PHONE_ING'))
    fleu('/verifyphone',{
        phone: phone,
        code: code,
    },{
        status: 'verified|error'
    })
    .then(({status}) => {
        if(status == 'verified')
            dispatch(updateuserData('VERIFY_PHONE_SUCCESS', {phone}))
        if(status == 'error')
            dispatch(updateuserAction('VERIFY_PHONE_FAILED'))
    })
}

export const updateUser = (user) => dispatch => {
    dispatch(updateuserAction('UPDATE_USER_ING'))
    fleu('/updateuser',{
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
