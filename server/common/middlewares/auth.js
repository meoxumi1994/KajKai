import { verifyToken } from '../../services/UserService'

const auth = () => {
  	return (req, res, next) => {
      // if (req.cookies && req.cookies.token) {
      //     console.log(req.cookies.token);
      // }
      console.log('fuck')
      console.log(req.cookies.token)
      let decoded = verifyToken(req.cookies.token)
    	if (decoded) {
          req.decoded = decoded
    		  next()
    	} else {
    		  res.send({
            authorization: "FAILED"
    		  })
    	}
  	}
}

export default auth
