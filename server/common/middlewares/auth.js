import { verifyToken } from '../../services/UserService'

const auth = () => {
  	return (req, res, next) => {
        console.log('token :' + req.cookies.token)
        let decoded = verifyToken(req.cookies.token)
		if (decoded) {
			console.log(decoded)
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
