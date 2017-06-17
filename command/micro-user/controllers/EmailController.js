import { verifyToken, updateVerifyUser, getUserToken } from '../services/UserService.js'
import config from '../config/commonConfig'

export const comfirmEmailVerification = () => {
	return (req, res) => {
		console.log(req.params.token)
		var token = req.params.token
		var redirectUrl = config.getClientDomain()
		console.log('token', token);
		if (!token) {
			res.redirect(redirectUrl + '/login')
		}
		var decoded = verifyToken(token)
		console.log(decoded)
		if (!decoded) {
			res.redirect(redirectUrl + '/login')
		} else {
            updateVerifyUser(decoded._id, function (err) {
                if (err) {
                    res.redirect(redirectUrl + '/login')
                } else {
                    res.cookie('token', getUserToken(decoded._id))
                    res.redirect(redirectUrl + '/profile')
                }
            })
		}
	}
}
