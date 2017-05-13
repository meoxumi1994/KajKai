import { updateuserData } from '~/actions/sync/updateuser'
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