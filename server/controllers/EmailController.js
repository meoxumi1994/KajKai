import UserService from '../services/UserService.js'
import config from '../config/serverConfig'

export const comfirmEmailVerification = () => {
	return (req, res) => {
		console.log(req.params.token)
		var token = req.params.token
<<<<<<< Updated upstream
		var redirectUrl = config.getClientDomain()
=======
		var redirectUrl = 'http://localhost:3000'
>>>>>>> Stashed changes
		if (!token) {
			res.redirect(redirectUrl + '/login')
		}
		var decoded = UserService.verifyToken(token)
		console.log(decoded)
		if (!decoded) {
			res.redirect(redirectUrl + '/login')
		} else {
            UserService.updateVerifyUser(decoded._id, function (err) {
                if (err) {
                    res.redirect(redirectUrl + '/login')
                } else {
                    res.cookie('token', UserService.getUserToken(decoded._id))
                    res.redirect(redirectUrl + '/profile')
                }
            })
		}
	}
}
