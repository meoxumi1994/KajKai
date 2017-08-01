import { Test, Item } from '../models'
// class
export const queryHandler = () => (req, res) => {
  Test.find({}, (err, test) => {
    res.json({
      err,
      test
    })
  })
}

export const insertHandler = () => (req, res) => {
  let { username, password } = req.body

  const item = new Item({
    name: username,
    age: 23
  })

  const test = new Test({
    username,
    password,
    list: [item, item, item]
  })

  test.save((err, newTest, num) => {
    res.json({
      err,
      newTest,
      num
    })
  })
}

export const updateHandler = () => (req, res) => {
  let { username, password } = req.body

  Test.findOneAndUpdate({ username }, { password }, (err, oldTest ) => {
    res.json({
      status: 'success',
      err,
      oldTest
    })
  })
}
