import { authAction, authData} from '~/actions/sync/auth'
import { flet, flem } from '~/actions/support'

export const registerStore = (newindex, store) => dispatch => {
    dispatch(authAction('REGISTER_STORE_ING'))
    flet('/registerstore',{
        ...store,
        longitude: 1,
        latitude: 1,
    },{
        status: 'success|error'
    })
    .then(({ status, store}) => {
        if(status == 'success')
            dispatch(authData('REGISTER_STORE_SUCCESS', { newindex, store: store }))
        else if(status == 'error')
            dispatch(authAction('REGISTER_STORE_FAILED'))
    })
}

export const getCategory = () => dispatch => {
    dispatch({ type: 'GET_LIST_CATEGORY_ING'})
    flem('/categorylist',{

    })
    .then(({ status, categories }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_LIST_CATEGORY_SUCCESS', categories: categories })
        }else{
            dispatch({ type: 'GET_LIST_CATEGORY_FAILED'})
        }
    })
}

export const updatePhone = (phone) => dispatch => {
    dispatch({ type: 'UPDATE_PHONE_ING', newvalue: phone })
    flet('/updatephone',{
        phone: phone
    },{
        status: 'pending|used|error'
    })
    .then(({status}) => {
        if(status == 'pending')
            dispatch(dispatch({ type: 'UPDATE_PHONE_PENDING'}))
        if(status == 'used' )
            dispatch(dispatch({ type: 'UPDATE_PHONE_USED'}))
        if(status == 'error')
            dispatch(dispatch({ type: 'UPDATE_PHONE_FAILED'}))
    })
}

export const verifyPhone = (phone, code) => dispatch => {
    dispatch(dispatch({ type: 'VERIFY_PHONE_ING'}))
    flet('/verifyphone',{
        phone: phone,
        code: code,
    },{
        status: 'verified|error'
    })
    .then(({status}) => {
        if(status == 'verified')
            dispatch(dispatch({ type: 'VERIFY_PHONE_SUCCESS' }))
        if(status == 'error')
            dispatch(dispatch({ type: 'VERIFY_PHONE_FAILED' }))
    })
}
