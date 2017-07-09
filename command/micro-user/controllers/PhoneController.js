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
            if (status === 'verified') {
                updateUserPhone(req.decoded._id, phone, function(mstatus, oldPhone){
                  if(mstatus == 'success') {
                    if (oldPhone) {
                      mNexmoVerifyLogout(oldPhone)
                    }
                    res.json({status})
                  } else {
                    res.json({
                        status: 'error'
                    })
                  }
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

export const verifyPhoneHandler = () => (req, res) => {
  const { phone } = req.body
  mNexmoVerifyPhone(phone).then((status) => {
    console.log('status verify 1', status)
    if (status == 'verified') {
      mNexmoVerifyLogout(phone).then((status) => {
        console.log('status logout', status)
        mNexmoVerifyPhone(phone).then((status) => {
          console.log('status verify 2', status)
          if (status == 'pending') {
            res.json({
              status: 'success'
            })
          } else {
            res.json({
              status: 'error',
              number: 1
            })
          }

        }, (err) => {
          console.log('Nexmo error err', err)
          res.json({
            status: 'error',
            number: 2
          })
        })

      }, (err) => {
        console.log('Nexmo error err', err)
        res.json({
          status: 'error',
          number: 3
        })
      })
    } else if (status == 'pending') {
      mNexmoVerifyPhone(phone).then((status) => {
        console.log('status verify 3', status)
        if (status == 'pending') {
          res.json({
            status: 'success'
          })
        } else {
          res.json({
            status: 'error',
            number: 4
          })
        }

      }, (err) => {
        console.log('Nexmo error err', err)
        res.json({
          status: 'error',
          number: 5
        })
      })
    } else {
      res.json({
        status: 'error',
        number: 6
      })
    }

  }, (err) => {
    console.log('Nexmo error err', err)
    res.json({
      status: 'error',
      number: 7
    })
  })
}

export const verifyPhoneCodeHandler = () => (req, res) => {
  const { phone, code } = req.body
  mNexmoVerifyCheck(phone, code).then((status) => {
    console.log('status check', status)
    if (status == 'verified') {
      res.json({
        status: 'verified'
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
    res.json({ status })
  }, err => {
    res.json({ err })
  })
}
