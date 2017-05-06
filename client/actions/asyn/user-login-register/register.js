import { authAction, authData } from '../../sync/auth'
import { flet } from '../../support'

export const register = (username, email, password) => dispatch => {
    dispatch(authAction('REGISTER_ING'))
    flet('/register',{
        username : username,
        email: email,
        password: password,
    },{
        status: 'success|used|error'
    })
    .then((res) => {
        if(res.status == 'used')
            dispatch(authAction('REGISTER_ALREADY_OPEN'))
        if(res.status == 'success')
            dispatch(authData('REGISTER_SUCCESS',{
                username : username,
                email: email,
                password: password,
            }))
        if(res.status == 'error')
            dispatch(authAction('REGISTER_FAILED'))
    })
}

// export const verifyPhone = (phone) => dispatch => {
//     dispatch(authAction('REGISTER_ING'))
//     flet('/verifyphone',{
//         phone: phone,
//     },{
//         status: 'pending|used|error'
//     })
//     .then((res) => {
//         if(res.status == 'pending')
//             console.log('pending')
//     })
// }
//
// export const verifyCheck = (phone, code) => dispatch => {
//     dispatch(authAction('REGISTER_ING'))
//     flet('/verifyphone',{
//         phone: phone,
//         code: code,
//     },{
//         status: 'verified|error'
//     })
//     .then((res) => {
//         if(res.status == 'already registered')
//             dispatch(authAction('REGISTER_ALREADY_OPEN'))
//         else
//         if(res.status == 'success')
//             dispatch(authData('REGISTER_SUCCESS',{
//                 username : username,
//                 phone: loginId,
//                 password: password,
//             }))
//         else
//             dispatch(authAction('REGISTER_FAILED'))
//     })
// }
