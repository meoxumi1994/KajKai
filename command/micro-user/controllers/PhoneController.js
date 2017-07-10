import { getUserFromPhone, updateUserPhone } from '../services/UserService.js'
import { mNexmoVerifyPhone, mNexmoVerifyCheck, mNexmoVerifyLogout, mNexmoVerifyCancel, mNexmoVerifySearch } from '../services/PhoneService'

export const updateUserPhoneHandler = () => (req, res) => {
    const { phone } = req.body
    console.log(phone)
    getUserFromPhone(phone, function(user){
        if (user) {
            res.json({status: 'phone is already used'})
        } else {
            updateUserPhone(req.decoded._id, phone, (status) => {
              res.json({ status })
            })
        }
    })
}

export const verifyPhoneHandler = () => (req, res) => {
  const { phone } = req.body
  console.log('phone:', phone)
  mNexmoVerifyPhone(phone).then((status) => {
    console.log('status verify:', status)
    if (status == 'pending') {
      res.json({
        status: 'pending'
      })
    } else {
      console.log('Nexmo error status verify', status)
      res.json({
        status: 'error',
        number: 1
      })
    }

  }, (err) => {
    console.log('Nexmo error err', err)
    if (err.includes('we will reverify')) {
      res.json({
        status: 'pending'
      })
    } else {
      res.json({
        status: 'error',
        number: 2
      })
    }
  })
}

export const reverifyPhoneHandler = () => (req, res) => {
  const { phone } = req.body
  console.log('phone re:', phone)
  mNexmoVerifyCancel(phone).then((status) => {
    mNexmoVerifyPhone(phone).then((status) => {
      if (status == 'pending') {
        res.json({
          status: 'pending'
        })
      } else {
        console.log('Nexmo error status verify', status)
        res.json({
          status: 'error',
          number: 1
        })
      }
    }, (err) => {
      console.log('Nexmo error err', err)
      if (err.includes('we will reverify')) {
        res.json({
          status: 'pending'
        })
      } else {
        res.json({
          status: 'error',
          number: 2
        })
      }
    })

  }, (err) => {
    console.log('Nexmo error err', err)
    res.json({
      status: 'error',
      message: 'Wait for 30 seconds, please!'
    })
  })
}

export const verifyPhoneCodeHandler = () => (req, res) => {
  const { phone, code } = req.body
  console.log('phone check', phone)
  console.log('code check', code)
  mNexmoVerifyCheck(phone, code).then((status) => {
    console.log('status check', status)
    if (status == 'verified') {
      res.json({
        status: 'verified'
      })
      mNexmoVerifyLogout(phone).then((status) => {
        console.log('logout after verified: ', status)
      }, (err) => {
        console.log('logout err after verified: ', err)
      })
    } else {
      console.log('Nexmo error status verifycheck', status)
      res.json({
        status: 'error',
        number: 1
      })
      res.json({
        status: 'error',
        number: 2
      })
    }
  }, (err) => {
    console.log('Nexmo error err', err)
    res.json({
      status: 'error',
      number: 3
    })
  })
}

export const out = () => (req, res) => {
  const { phone } = req.body
  mNexmoVerifyLogout(phone).then(status => {
    console.log('status logout: ', status)
    res.json({ status })
  }, err => {
    console.log('err logout: ', err)
    res.json({ err })
  })
}

export const cancel = () => (req, res) => {
  const { phone } = req.body
  mNexmoVerifyCancel(phone).then(status => {
    console.log('status cancel: ', status)
    res.json({ status })
  }, err => {
    console.log('err cancel: ', err)
    res.json({ err })
  })
}

export const search = () => (req, res) => {
  const { phone } = req.body
  mNexmoVerifySearch(phone).then(status => {
    console.log('status search: ', status)
    res.json({ status })
  }, err => {
    console.log('err search: ', err)
    res.json({ err })
  })
}
