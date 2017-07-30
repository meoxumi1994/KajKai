import { Test } from '../models'

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

  const test = new Test({
    username,
    password
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
      err,
      oldTest
    })
  })
}
