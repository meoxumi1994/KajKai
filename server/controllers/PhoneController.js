import { mNexmoVerifyPhone, mNexmoVerifyCheck } from '../services/PhoneService'
import UserService from '../services/UserService.js'

export const verifyPhone = () => (req, res) => {
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

export const verifyCheck = () => (req, res) => {
  const { phone, code } = req.body
    mNexmoVerifyCheck(phone, code)
    .then((status) => {
        res.send({status})
    }, (err) => {
      res.send({
        status: 'error'
      })
    })
}