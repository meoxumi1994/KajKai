import { User, Address } from '../models'

export const queryHandler = () => (req, res) => {
  const id = '1234'
  User.findOne({ id }, (err, user) => {
    res.json({
      err, user
    })
  })
}

export const insertHandler = () => (req, res) => {
  const user = new User(req.body)

  user.save((err, newUser, num) => {
    console.log(err, newUser, num)
    res.json({
      err, xxx: newUser.lastUpdate.phone.getTime(), num
    })
  })
}

export const updateHandler = () => (req, res) => {

  User.findOne({ id: 'ey89dheify927f02buv3u'}, (err, user) => {
    if (user) {
      user.username = 'What the hell is going on?'
      user.save((err, xxx) => {
        res.json({
          err, xxx
        })
      })
    } else {
      res.json({
        err
      })
    }
  })


  // const address = new Address({
  //   _id: "59493a5aae88a8155cf374de"
  // })


  // Address.findById('59493a5aae88a8155cf374de', (err, address) => {
  //   address.city = 'Quang Nam'
  //   address.district = 'Dien Ban'
  //   address.street = 'Truong Sa'
  //   address.longitude = 123
  //   address.latitude = 321
  //
  //   address.save((err, newAddress) => {
  //     res.json({
  //       err, newAddress
  //     })
  //   })
  // })

  // const user = new User({
  //   _id: '5947f72603b3340ad4183857',
  //   username: 'abcxyz'
  // })

  // User.findById('5947f72603b3340ad4183857', (err, user) => {
  //   user.username = 'aaaxxx'
  //   user.save((err, newUser) => {
  //     console.log(err, newUser, num)
  //     res.json({
  //       err, newUser, num, a, b, c, d
  //     })
  //   })
  // })
  // const { username, email } = req.body
  //
  // const user = {}
  // user._id = '59493a5aae88a8155cf374kk'
  // user.username = 'abcdef'
  // user.email = 'xyztuv'
  // //
  // //
  // User.findOneAndUpdate({
  //   id: 'ey89dheify927f02buv3u'
  // }, user, (a, b, c, d, e) => {
  //   res.json({
  //     a, b, c, d, e
  //   })
  // })
}
