import { addNewInterest, removeInterest } from '../services/InterestService'

export const addNewInterestCon = () => {
    return (req, res) => {
        const userId = req.user.id;
        const {categoryId, position} = req.body;
        addNewInterest(userId, categoryId, position.lng, position.lat, (interestInfo) => {
            res.json({status: 'success', interest: interestInfo})
        })
    }
};

export const removeInterestCon = () => {
    return (req, res) => {
        const userId = req.user.id;
        const id = req.body.id;
        removeInterest(userId, id, (err, id) => {
            res.json({status: err ? 'failed': 'success', id: id});
        })
    }
};