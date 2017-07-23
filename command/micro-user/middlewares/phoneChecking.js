const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/

const phoneCheck = () => {
  	return (req, res, next) => {
      var phone  = req.body.phone
      if (phone && phoneRegrex.test(phone)) {
        next()
      } else {
        res.json({error: 'wrong phone format'})
      }
  	}
}

export default phoneCheck