import { addNewFollow, removeFollow } from '../services/FollowService'

export const updateNotifyCon = () => {
    return (req, res) => {
        const turnotify = req.body.turnotify;
        const sellpostId = req.params.sellpostid;
        const userId = req.user.id;
        if (turnotify) {
            addNewFollow(userId, sellpostId, (follow) => {
                if (follow) {
                    res.json({status: 'success', turnotify, id: sellpostId})
                } else {
                    res.json({status: 'failed'})
                }
            })
        } else {
            removeFollow(userId, sellpostId, (follow) => {
                if (follow) {
                    res.json({status: 'success', turnotify, id: sellpostId})
                } else {
                    res.json({status: 'failed'})
                }
            })
        }
    }
};