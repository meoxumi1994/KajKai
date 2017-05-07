import UserService from '../services/UserService.js'
import config from '../config/serverConfig'

export const comfirmEmailVerification = () => {
	return (req, res) => {
		console.log(req.params.token)
		var token = req.params.token
		var redirectUrl = 'localhost:3000'
		if (!token) {
			res.redirect(redirectUrl + '/login')
		}
		var decoded = UserService.verifyToken(token)
		console.log()
		if (!decoded) {
			res.redirect(redirectUrl + '/login')
		} else {
			res.cookie('token', UserService.getUserToken(decoded._id))
			res.redirect(redirectUrl + '/profile')
		}
	}
}