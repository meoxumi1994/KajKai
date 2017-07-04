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
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                body = JSON.parse(body);
                console.log(body);

                getUserFromFacebookId(body.id, function(user) {
                    if (user) {
                        const token = getUserToken(user._id);
                        console.log('facebook: ' + token);
                        res.cookie('token', token);
                        res.json({user: getUserBasicInfo(user), tokenId: token});
                    } else {
                        createUser(body.email, body.name, '1234', 1, null, SocialType.FACEBOOK, body.id, body.picture.data.url, (user) => {
                            if (user) {
                                createUserPub(user);
                                const token = getUserToken(user._id);
                                res.cookie('token', token);
                                res.json({user: getUserBasicInfo(user), tokenId: token});
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
};

export const loginEmail = () => {
    return (req, res) => {
        const loginId = req.body.loginId;
        const password = req.body.password;
        if (loginId && password && checkPhone(loginId)) {
            getUserFromPhone(loginId, function(user) {
                if (!user || user.password !== password) {
                    res.json({status : 'failed'});
                    return
                }
                res.cookie('token', getUserToken(user._id));
                res.json({status: 'success'});
            })
        }
        const email = req.body.email;
        if (email && password && checkEmail(email)) {
            getUserFromEmail(email, function(user) {
                if (!user || user.password !== password || user.verified === 0) {
                    res.json({status : 'failed'});
                    return
                }
                const token = getUserToken(user._id);
                res.cookie('token', token);
                res.json({status: 'success', user: getUserBasicInfo(user), tokenId: token});
            })
        } else {
            res.json({status: 'failed'})
        }

    }
};

export const loginGoogle = () => {
    return (req, res) => {
        const headers = {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        };
        const options = {
            url: config.GOOGLE_API_URL + req.body.tokenId,
            method: 'GET',
            headers: headers
        };
        console.log(req.body.tokenId);
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                body = JSON.parse(body);
                getUserFromEmail(body.email, (user) => {
                    if (user) {
                        const token = getUserToken(user._id);
                        res.cookie('token', token);
                        res.json({user: getUserBasicInfo(user), tokenId: token});
                    } else {
                        console.log("Im hrere " + JSON.stringify(body) + ' ' + error + ' ' + JSON.stringify(response));
                        createUser(body.email, body.name, '1234', 1, null, SocialType.GOOGLE, null, body.picture, (newUser) => {
                            console.log('shit ' + JSON.stringify(newUser));
                            if (newUser !== null) {
                                console.log('fuck user');
                                createUserPub(newUser);
                                const token = getUserToken(newUser._id);
                                res.cookie('token', token);
                                res.json({user: getUserBasicInfo(newUser), tokenId: token});
                            } else {
                                console.log('fuckshit error');
                                res.json({error: 'error'})
                            }
                            return;
                        })
                    }
                })
            } else {
                res.json({error: 'error'})
            }
        })
    }
};

export const logOutUser = () => {
    return (req, res) => {
        res.cookie('token', 'invalid');
        res.json({status: 'success'});
    }
};