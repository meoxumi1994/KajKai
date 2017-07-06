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
    console.log('getCategory')
    flem('/categorylist',{

    })
    .then(({ status, categorylist }) => {
        if(status == 'success'){
            dispatch({ type: 'GET_LIST_CATEGORY_ING', categorylist: categorylist })
            console.log(categorylist)
        }else{
            dispatch({ type: 'GET_LIST_CATEGORY_ING', categorylist: categorylist })
        }
    })
}
