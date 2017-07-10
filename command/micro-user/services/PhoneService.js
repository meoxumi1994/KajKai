import NexmoVerify from 'verify-javascript-sdk'

const Nexmo = new NexmoVerify({
    appId: 'd68d052b-38e9-4bae-a099-0f610ac0b4b4',
    sharedSecret: 'dfe41a5d6a06d73'
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

export const mNexmoVerifyCancel = (phone) => (
  Nexmo.verifyControl({
    number: phone,
    cmd: 'cancel'
  }).then((status) => {
    console.log('cancel_status', status)
    return status
  }, (err) => {
    console.log('cancel_error', err)
    throw err
  })
)

export const mNexmoVerifySearch = (phone) => (
  Nexmo.verifySearch({
    number: phone
  }).then((status) => {
    console.log('search_status', status)
    return status
  }, (err) => {
    console.log('search_error', err)
    throw err
  })
)
