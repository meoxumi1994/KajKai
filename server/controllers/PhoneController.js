import { mNexmoVerifyPhone, mNexmoVerifyCheck } from '../services/PhoneService'
import UserService from '../services/UserService.js'

export const updateUserPhone = () => (req, res) => {
  const { phone } = req.body

  UserService.getUserFromPhone(phone, function(user){
    if (user) {
      res.json({status: 'phone is already used'})
    } else {
      mNexmoVerifyPhone(phone)
        .then((status) => {
            res.send({status})
        }, (err) => {
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
        if (status == 'verified') {
          UserService.updateUserPhone(req.decoded._id, phone, function(mstatus){
            res.json('status': mstatus)
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