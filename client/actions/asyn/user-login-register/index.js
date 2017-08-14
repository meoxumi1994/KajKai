import { updateuserData } from '~/actions/sync/updateuser'
import { fleu, flet } from '~/actions/support'

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

export const reset = (email) => dispatch => {
    dispatch({ type: 'RESET_PASSWORD_ING' })
    flet('/reset',{
        email: email
    }).then(({ status }) => {
        if(status == 'success'){
            dispatch({ type: 'RESET_PASSWORD_SUCCESS' })
        }else{
            dispatch({ type: 'RESET_PASSWORD_FAILED' })
        }
    })
}
