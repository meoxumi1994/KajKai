import { authAction, authData } from '~/actions/sync/auth'
import { flet,flem } from '~/actions/support'

export const getStore = (id) => dispatch => {
    flem('/getstore',{
        id: id
    },{
        status: 'success|failed',
        store: store
    })
    .then(({ status }) => {
        if(status == 'success'){

        } else if(status == 'failed'){
            
        }
    })
}
