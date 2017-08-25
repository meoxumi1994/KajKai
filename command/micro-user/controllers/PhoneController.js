import { getUserFromPhone, updateUserPhone } from '../services/UserService.js'
import { sendPhoneVerificationCode, checkPhoneVerificationCode } from '../services/PhoneService'

export const updateUserPhoneHandler = () => (req, res) => {
    const { phone } = req.body
    console.log(phone)
    updateUserPhone(req.decoded._id, phone, (status) => {
      res.json({ status })
    })
}

export const verifyPhoneHandler = () => (req, res) => {
  const { phone } = req.body
  console.log('phone:', phone)
  sendPhoneVerificationCode(phone, (status) => {
    console.log('status verify:', status)
    res.json({ status })
  })
}

export const verifyPhoneCodeHandler = () => (req, res) => {
  const { phone, code } = req.body
  console.log('phone:', phone)
  console.log('code:', code)
  checkPhoneVerificationCode(phone, code, (status) => {
    console.log('status verify check:', status)
    res.json({ status })
  })
}
