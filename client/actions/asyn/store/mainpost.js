import { authAction, authData } from '../../sync/auth'
import { flet,flem } from '../../support'

export const updateStore = (store) => dispatch => {
    flet('/updatestore',{
        store: store
    },{
        status: 'success|failed'
    })
    .then(({ status }) => {
        if(status == 'success'){
            
        } else if(status == 'failed'){

        }
    })
}
