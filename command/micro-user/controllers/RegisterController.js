import { getUserFromEmail, createUser, getUserToken, verifyToken, updateVerifyUser } from '../services/UserService'
import { checkEmail } from '../utils/utils'
import { sendVerifyEmail } from '../services/EmailService'
import config from '../config/commonConfig'
import { createUserPub } from './UserPubController'

export const registerNewUser = () => {
    return (req, res) => {
        if (req.body) {
            const body = req.body;
            if (checkEmail(body.email)) {
                getUserFromEmail(body.email.toLowerCase(), (user) => {
                    if (user) {
                        res.json({status: 'used'})
                    } else {
                        createUser(body.email.toLowerCase(), body.username, body.password, 0, null, null, null, null, (user) => {
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
        console.log('email token: ', token);
        let redirectUrl = config.getClientDomain();
        if (!token) {
            res.redirect(redirectUrl + '/login');
            return
        }
        const decoded = verifyToken(token);
        console.log('decoded: ', decoded);
        if (!decoded) {
          console.log('log1 ');
            res.redirect(redirectUrl + '/login')
        } else {
          console.log('log2 ');
            updateVerifyUser(decoded._id, (status) => {
                if (!status) {console.log('log3 ');
                  // console.log('err: ', err);
                    res.redirect(redirectUrl + '/login')
                } else { console.log('log4 ');
                    const token = getUserToken(decoded._id);
                    res.cookie('token', token);
                    console.log("this " + JSON.stringify(verifyToken(token)));
                    res.redirect(redirectUrl + '/user/' + decoded._id)
                }
            })
        }
    }
};