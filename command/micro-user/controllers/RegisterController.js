import { getUserFromEmail, createUser, getUserToken, verifyToken, updateVerifyUser } from '../services/UserService'
import { checkEmail } from '../utils/utils'
import { sendVerifyEmail } from '../services/EmailService'
import { config }  from '../config/commonConfig'
import { createUserPub } from './UserPubController'

export const registerNewUser = () => {
    return (req, res) => {
        if (req.body) {
            const body = req.body;
            if (checkEmail(body.email)) {
                getUserFromEmail(body.email, (user) => {
                    if (user) {
                        res.json({status: 'used'})
                    } else {
                        createUser(body.email, body.username, body.password, 0, null, null, null, (user) => {
                            if (!user) {
                                res.json({status: 'failed'})
                            } else {
                                createUserPub(user);
                                sendVerifyEmail(body.email, getUserToken(user._id), () => {
                                    res.json({status: 'success'})
                                })
                            }
                        })
                    }
                })
            }
        }
    }
};

export const confirmEmailVerification = () => {
    return (req, res) => {
        const token = req.params.token;
        const redirectUrl = config.REDIRECT_URL;
        if (!token) {
            res.redirect(redirectUrl + '/login');
            return
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            res.redirect(redirectUrl + '/login')
        } else {
            updateVerifyUser(decoded._id, (err) => {
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
