import { addNewFollow, removeFollow } from '../services/FollowService'

export const updateNotifyCon = () => {
    return (req, res) => {
        const turnnotify = req.body.turnnotify;
        const sellpostId = req.params.sellpostid;
        const userId = req.user.id;
        if (turnnotify) {
            addNewFollow(userId, sellpostId, (follow) => {
                if (follow) {
                    res.json({status: 'success', turnnotify, id: sellpostId})
                } else {
                    res.json({status: 'failed'})
                }
            })
        } else {
            removeFollow(userId, sellpostId, (follow) => {
                if (follow) {
                    res.json({status: 'success', turnnotify, id: sellpostId})
                } else {
                    res.json({status: 'failed'})
                }
            })
        }
    }
};