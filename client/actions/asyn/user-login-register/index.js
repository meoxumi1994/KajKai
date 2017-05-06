import { updateuserData } from '../../sync/updateuser'
import { fleu } from '../../support'

export const changeLanguage = (language, user) => dispatch => {
    dispatch(updateuserData('LANGUAGE', { language : language }))
    if(user.username){
        fleu('/updateuser',{
            language: language
        },{
            status: 'failed|success'
        })
        .then((response) => {
        })
    }
}
