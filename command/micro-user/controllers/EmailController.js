import { verifyToken, updateVerifyUser, getUserToken } from '../services/UserService.js'
import config from '../config/commonConfig'

export const comfirmEmailVerification = () => {
	return (req, res) => {
		console.log(req.params.token);
		let token = req.params.token;
        let redirectUrl = config.getClientDomain();
		if (!token) {
			res.redirect(redirectUrl + '/login')
		}
        let decoded = verifyToken(token);
		console.log(decoded);
		if (!decoded) {
			res.redirect(redirectUrl + '/login')
		} else {
            updateVerifyUser(decoded._id, function (err) {
                if (err) {
                    res.redirect(redirectUrl + '/login')
                } else {
                    res.cookie('token', getUserToken(decoded._id));
                    res.redirect(redirectUrl + '/profile')
                }
            })
		}
	}
};
