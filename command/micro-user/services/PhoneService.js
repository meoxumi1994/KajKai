import twilio from 'twilio'
import { Phone } from '../models'

export const sendPhoneVerificationCode = (phone, next) => {
  const client = twilio('AC9d56fa868509534d25f79d014bce9d3a', '7a88c013ff38584546f7e9c3d5d2476f')
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
          from: '+12017204676',
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
