import NexmoVerify from 'verify-javascript-sdk'

const Nexmo = new NexmoVerify({
    appId: '7c26c15b-1ed8-4096-9d9f-64f43805f893',
    sharedSecret: '54835f9f46a5653'
})

export const mNexmoVerifyPhone = (phone) => (
    Nexmo.verify({
        number: phone

    }).then((status) => {
        console.log('verify_status', status)
        return status

    }, (err) => {
        console.log('verify_error', err)
        throw err
    })
)

export const mNexmoVerifyCheck = (phone, code) => (
    Nexmo.verifyCheck({
        number: phone,
        code: code
    }).then((status) => {
        console.log('check_status', status)
        return status
    }, (err) => {
        console.log('check_error', err)
        throw err
    })
)

export const mNexmoVerifyLogout = (phone) => (
    Nexmo.verifyLogout({
        number: phone
    }).then((status) => {
        console.log('logout_status', status)
        return status
    }, (err) => {
        console.log('logout_error', err)
        throw err
    })
)
