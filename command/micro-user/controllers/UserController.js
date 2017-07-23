import { updateUserInfo, getUser, getUserBasicInfo, getUserTrivivalInfo } from '../services/UserService.js'
import { updateUserPub } from './UserPubController'
import { checkBlackList } from '../services/BlackListService'
import global from '../config/globalId'

export const getUserController = () => {
    return (req, res) => {
        console.log(req.decoded);
        if (req.decoded) {
            const id = req.decoded._id;
            getUser(id, (user) => {
                if (user) {
                    getUserBasicInfo(user, (data) => {
                        res.json(data)
                    })
                } else {
                    res.json({status: 'failed'})
                }
            })
        } else {
            res.json({status: 'failed'})
        }
    }
};

export const getUserTrivial = () => {
    return (req, res) => {
        if (req.decoded) {
            const id = req.decoded._id;
            getUser(id, function (user) {
                if (user) {
                    res.json(getUserTrivivalInfo(user))
                } else {
                    res.json({status: 'failed'})
                }
            })
        } else {
            res.json({status: 'failed'})
        }
    }
};

export const changeUserPhone = () => {
    return (req, res) => {
        console.log(req.body.phone)
        getUser(req.decoded._id, (user) => {
            if (user) {
                user.phone = req.body.phone
                user.save((err) =>{
                    if (err) {
                        res.json({status: 'failed'})
                    } else {
                        res.json({status: 'success'})
                    }
                })
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}

export const updateUserPassword = () => {
    return (req, res) => {
        const id = req.decoded._id;
        getUser(id, (user) => {
            if (user) {
                if (user.password !== req.body.password || !req.body.newpassword || req.body.newpassword.length < 6
                    || user.password === user.newpassword) {
                    res.json({status: 'failed'})
                } else {
                    user.password = req.body.newpassword
                    user.passwordLastUpdatedAt = new Date()
                    user.save(() => {
                        res.json({status: 'success'})
                    })
                }
            } else {
                res.json({status: 'failed'})
            }
        })
    }
};

export const changeUserProfile = () => {
    return (req, res) => {
        updateUserInfo(req.decoded._id, req.body, (status, user) => {
            if (user) {
                updateUserPub(user)
            }
            res.json({status: status, user: {...req.body, id: req.decoded._id}});
        })
    }
};

export const blackList = () => {
    return (req, res) => {
        const userId = req.decoded._id;
        const blockId = req.body.blockid;
        checkBlackList(userId, blockId, (block, type) => {
            var idtype = '';
            switch (userId) {
                case userId.startsWith(global.USER_GLOBAL_ID):
                    idtype = 'userid';
                    break;
                case userId.startsWith(global.STORE_GLOBAL_ID):
                    idtype = 'storeid';
                    break;
                case userId.startsWith(global.MESSAGE_GLOBAL_ID):
                    idtype = 'mesid';
                    break
            }
            res.json({blockid: blockId, type: type, idtype: idtype, name: block.name})
        })
    }
};