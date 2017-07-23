import NexmoVerify from 'verify-javascript-sdk'
import UserService from '../services/UserService.js'

const Nexmo = new NexmoVerify({
  appId: '7a554b88-84b8-430e-8dc5-e2dda5336528',
  sharedSecret: '34e97d5e30dd40d'
})

export const mNexmoVerifyPhone = (phone) => (
  Nexmo.verify({
    number: phone

  }).then((status) => {
      console.log('verify_status', status)
      return status
      
  }, ( err ) => {
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

  },( err ) => {
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

  },( err ) => {
    console.log('logout_error', err)
    throw err
  })
)
