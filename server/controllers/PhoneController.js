import { mNexmoVerifyPhone, mNexmoVerifyCheck, mNexmoVerifyLogout } from '../services/PhoneService'
import UserService from '../services/UserService.js'

export const updateUserPhone = () => (req, res) => {
  const { phone } = req.body
  console.log(phone)
  UserService.getUserFromPhone(phone, function(user){
    if (user) {
      res.json({status: 'phone is already used'})
    } else {
      mNexmoVerifyPhone(phone)
        .then((status) => {
            console.log(status)
            res.json({status})
        }, (err) => {
          console.log(err)
          res.json({
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
            mNexmoVerifyLogout(phone).then(res.json({'status': mstatus}))
          })
        } else {
          res.json({status})
        }
    }, (err) => {
      res.json({
        status: 'error'
      })
    })
}

export const verifyLogout = () => (req, res) => {
  const { phone } = req.body
    mNexmoVerifyLogout(phone)
    .then((status) => {
        res.json({status})
    }, (err) => {
      res.json({
        status: 'error'
      })
    })
}