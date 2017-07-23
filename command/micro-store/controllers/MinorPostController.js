import { createNewMinorPost, updateMinorPost } from '../services/MinorPostService'

export const createNewMinorPostCon = () => {
    return (req, res) => {
        createNewMinorPost(req.body, (minorPostInfo) => {
            res.json({status: 'success', minorpost: minorPostInfo});
        })
    }
};

export const updateNewMinorPostCon = () => {
    return (req, res) => {
        updateMinorPost(req.body, (minorPostInfo) => {
            res.json({status: 'success', minorpost: minorPostInfo});
        })
    }
};