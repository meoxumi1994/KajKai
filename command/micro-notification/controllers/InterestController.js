import { addNewInterest, removeInterest } from '../services/InterestService'

export const addNewInterestCon = () => {
    return (req, res) => {
        const userId = req.user.id;
        const {categoryId, longitude, latitude} = req.body;
        addNewInterest(userId, categoryId, longitude, latitude, (interestInfo) => {
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