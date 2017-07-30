import { Test } from '../models'

export const queryHandler = () => (req, res) => {
  Test.find({}, (err, test) => {
    // console.log('err: ', err)
    // console.log('test: ', test)
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
    // console.log('err: ', err)
    // console.log('newTest: ', newTest)
    // console.log('num: ', num)
    res.json({
      err,
      newTest,
      num
    })
  })
}

export const updateHandler = () => (req, res) => {
  let { username, password } = req.body

  Test.findOneAndUpdate({ username }, (a, b ) =>{
    console.log('a: ', a)
    console.log('b: ', b)
    // console.log('c: ', c)
    // console.log('d: ', d)
    res.json({
      a,
      b,
      // c,
      // d
    })
  })
}
