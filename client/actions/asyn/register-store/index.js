import { authAction, authData} from '~/actions/sync/auth'
import { flet } from '~/actions/support'

export const registerStore = (storename, address, phone, category) => dispatch => {
    dispatch(authAction('REGISTER_STORE_ING'))
    flet('/registerstore',{
        storename: storename,
        address: address,
        phone: phone,
        category: category,
        longitude: 1,
        latitude: 1,
    },{
        status: 'success|error'
    })
    .then(({ status, store}) => {
        if(status == 'success')
            dispatch(authData('REGISTER_STORE_SUCCESS', { store: store }))
        else if(status == 'error')
            dispatch(authAction('REGISTER_STORE_FAILED'))
    })
}
