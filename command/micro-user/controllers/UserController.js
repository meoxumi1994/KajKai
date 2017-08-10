import { updateUserInfo, getUser} from '../services/UserService.js'
import { updateUserPub } from './UserPubController'
import { addBlackList } from '../services/BlackListService'

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

export const blockUserCon = () => {
    return (req, res) => {
        const userId = req.decoded._id;
        const blockId = req.body.userid;
        addBlackList(userId, blockId, (block) => {
            if (block) {
                res.json({status: 'success', userid: blockId, id: block.id})
            } else {
                res.json({status: 'failed'})
            }
        })
    }
};