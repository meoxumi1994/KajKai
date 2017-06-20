import { User } from '../models'

export const insertHandler = () => (req, res) => {
  const user = new User(req.body)

  user.save((err, newUser, num) => {
    console.log(err, newUser, num)
    res.send({
      err, newUser, num
    })
  })
}

export const updateHandler = () => (req, res) => {
  const user = new User({
    _id: '5947f72603b3340ad4183857',
    username: 'abcxyz'
  })

  // User.findById('5947f72603b3340ad4183857', (err, user) => {
  //   user.username = 'aaaxxx'
  //   user.save((err, newUser) => {
  //     console.log(err, newUser, num)
  //     res.send({
  //       err, newUser, num, a, b, c, d
  //     })
  //   })
  // })

  User.findOneAndUpdate({
    id: 'ey89dheify927f02buv3u'
  }, {
    username: 'another name'
  }, (a, b, c, d, e) => {
    res.send({
      a, b, c, d, e
    })
  })
}
