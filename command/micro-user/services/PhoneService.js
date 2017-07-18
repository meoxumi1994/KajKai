import twilio from 'twilio'
import { Phone } from '../models'

export const sendPhoneVerificationCode = (phone, next) => {
  const client = twilio('AC4bd0eab0ac039e1c779c2ea64bf82a43', '6f9c24783885cc9181eaa722f30f4c3e')
  const code = parseInt(Math.random() * 10000)
  console.log('phone: ', phone)

  Phone.findOne({ phone }, (err, mPhone) => {
    if (mPhone) {
      mPhone.code = code
    } else {
      mPhone = new Phone({
        phone, code
      })
    }

    mPhone.save(() => {
      client.api.messages
        .create({
          body: 'KAJKAI code: ' + code,
          to: phone,
          // from: '+12017204676',
          from: '+13139864864',
        }).then((data) => {
          console.log('send code success')
          next('pending')
        }, (err) => {
          console.error('send code err: ', err)
          next('error')
        })
    })
  })
}

export const checkPhoneVerificationCode = (phone, code, next) => {
  console.log('phone: ', phone)
  console.log('code: ', code)
  Phone.findOne({ phone }, (err, mPhone) => {
    if (mPhone && mPhone.code == code) {
      next('verified')
    } else {
      next('error')
    }
  })
}
