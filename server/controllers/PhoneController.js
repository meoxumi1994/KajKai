import { getUserFromPhone, updateUserPhone } from '../services/UserService.js'
import { mNexmoVerifyPhone, mNexmoVerifyCheck, mNexmoVerifyLogout } from '../services/PhoneService'

export const updateUserPhoneController = () => (req, res) => {
  const { phone } = req.body
  console.log(phone)
  getUserFromPhone(phone, function(user){
    if (user) {
      res.json({status: 'phone is already used'})
    } else {
      mNexmoVerifyPhone(phone)
        .then((status) => {
            console.log(status)
            res.send({status})
        }, (err) => {
          console.log(err)
          res.send({
            status: 'error'
          })
        })
    }
  })
}

export const verifyPhone = () => (req, res) => {
  const { phone, code } = req.body
    mNexmoVerifyCheck(phone, code)
    .then((status) => {
        if (status === 'verified') {
          updateUserPhone(req.decoded._id, phone, function(mstatus){
            mNexmoVerifyLogout(phone).then(res.json({'status': mstatus}))
          })
        } else {
          res.send({status})
        }
    }, (err) => {
      res.send({
        status: 'error'
      })
    })
}

export const verifyLogout = () => (req, res) => {
  const { phone } = req.body
    mNexmoVerifyLogout(phone)
    .then((status) => {
        res.send({status})
    }, (err) => {
      res.send({
        status: 'error'
      })
    })
}