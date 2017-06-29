import config from '../config/commonConfig'
import { getUserFromFacebookId, getUserBasicInfo, getUserToken, createUser, getUserFromEmail, getUserFromPhone } from '../services/UserService'
import { checkPhone, checkEmail } from '../utils/utils'
import { SocialType } from '../enum'
import { createUserPub } from './UserPubController'
import request from 'request'

export const loginFacebook = () => {
    return (req, res) => {
        console.log(req.body);
        const headers = {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        };
        const options = {
            url: config.FACEBOOK_API_URL + req.body.tokenId,
            method: 'GET',
            headers: headers
        };
        request(options, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                body = JSON.parse(body)
                console.log(body)

                getUserFromFacebookId(body.id, function(user) {
                    if (user) {
                        const token = getUserToken(user._id);
                        console.log('facebook: ' + token);
                        res.cookie('token', token);
                        res.json({user: getUserBasicInfo(user)});
                    } else {
                        createUser(null, body.name, '1234', 1, null, SocialType.FACEBOOK, body.id, function (user) {
                            if (user) {
                                res.cookie('token', getUserToken(user._id));
                                res.json({user: getUserBasicInfo(user)});
                                createUserPub(user);
                            } else {
                                res.json({error: error})
                            }
                        })
                    }
                })
            } else {
                res.json({error: 'error'})
            }
        })
    }
}

export const loginEmail = () => {
    return (req, res) => {
        const loginId = req.body.loginId
        const password = req.body.password
        if (loginId && password && checkPhone(loginId)) {
            getUserFromPhone(loginId, function(user) {
                if (!user || user.password !== password) {
                    res.json({status : 'failed'})
                    return
                }
                res.cookie('token', getUserToken(user._id))
                res.json({status: 'success'})
                return
            })
        }
        const email = req.body.email
        if (email && password && checkEmail(email)) {
            getUserFromEmail(email, function(user) {
                if (!user || user.password !== password || user.verified === 0) {
                    res.json({status : 'failed'});
                    return
                }
                res.cookie('token', getUserToken(user._id));
                res.json({status: 'success'})
            })
        } else {
            res.json({status: 'failed'})
        }

    }
}

export const loginGoogle = () => {
    return (req, res) => {
        const headers = {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        }
        const options = {
            url: config.GOOGLE_API_URL + req.body.tokenId,
            method: 'GET',
            headers: headers
        }
        request(options, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                body = JSON.parse(body);
                getUserFromEmail(body.email, function(user) {
                    if (user) {
                        res.cookie('token', getUserToken(user._id));
                        res.json({user: getUserBasicInfo(user)});
                    } else {
                        createUser(body.email, body.name, '1234', 1, null, SocialType.GOOGLE, null, function (user) {
                            if (!user) {
                                res.json({error: 'error'})
                            } else {
                                res.cookie('token', getUserToken(user._id));
                                res.json({user: getUserBasicInfo(user)});
                                createUserPub(user);
                            }
                        })
                    }
                })
            } else {
                res.json({error: 'error'})
            }
        })
    }
}

export const logOutUser = () => {
    return (req, res) => {
        res.cookie('token', 'invalid')
        res.json({})
    }
}
