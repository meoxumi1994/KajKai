import { authAction, authData} from '~/actions/sync/auth'
import { flet, flem } from '~/actions/support'
import { onWho } from '~/actions/asyn/app'

export const registerStore = (store) => dispatch => {
    dispatch({ type: 'REGISTER_STORE_ING' })
    flet('/store',{
        ...store,
    },{
        status: 'success|error',
        storeid: '',
    })
    .then(({ status, storeid }) => {
        if(status == 'success'){
            dispatch({ type: 'REGISTER_STORE_SUCCESS', storeid: storeid })
            dispatch(onWho())
        }
        else if(status == 'error')
            dispatch({ type: 'REGISTER_STORE_FAILED' })
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

export const reUpdatePhone = (phone) => dispatch => {
    dispatch({ type: 'UPDATE_PHONE_ING', newvalue: phone })
    flet('/phonereverification',{
        phone: phone
    },{
        status: 'pending|used|error'
    })
    .then(({status}) => {
        if(status == 'pending'){
            dispatch({ type: 'UPDATE_PHONE_PENDING'})
        }
        if(status == 'used' )
            dispatch({ type: 'UPDATE_PHONE_USED'})
        if(status == 'error')
            dispatch({ type: 'UPDATE_PHONE_FAILED'})
    })
}

export const updatePhone = (phone) => dispatch => {
    dispatch({ type: 'UPDATE_PHONE_ING', newvalue: phone })
    flet('/phoneverification',{
        phone: phone
    },{
        status: 'pending|used|error'
    })
    .then(({status}) => {
        if(status == 'pending'){
            dispatch({ type: 'UPDATE_PHONE_PENDING'})
        }
        if(status == 'used' )
            dispatch({ type: 'UPDATE_PHONE_USED'})
        if(status == 'error')
            dispatch({ type: 'UPDATE_PHONE_FAILED'})
    })
}

export const verifyPhone = (phone, code) => dispatch => {
    dispatch(dispatch({ type: 'VERIFY_PHONE_ING'}))
    flet('/phonecodeverification',{
        phone: phone,
        code: code,
    },{
        status: 'verified|error'
    })
    .then(({status}) => {
        if(status == 'verified')
            dispatch({ type: 'VERIFY_PHONE_SUCCESS' })
        if(status == 'error')
            dispatch({ type: 'VERIFY_PHONE_FAILED' })
    })
}
