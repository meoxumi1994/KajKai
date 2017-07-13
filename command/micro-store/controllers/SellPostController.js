import { addSellPost, deleteSellPost, updateSellPost, getSellPostBasicInfo } from '../services/SellPostService'

export const addSellPostCon = () => {
    return (req, res) => {
        console.log('fuck sell post ' + JSON.stringify(req.body));
        addSellPost(req.body, (sellPost) => {
            console.log('heererere');
            res.json({sellpost: {...req.body, id: getSellPostBasicInfo(sellPost).sellpostid}, status: 'success'})
        });
    }
};

export const updateSellPostCon = () => {
    return (req, res) => {
        updateSellPost(req.body, (sellPost) => {
            res.json(req.body)
        })
    }
};

export const deleteSellPostCon = () => {
    return (req, res) => {
        deleteSellPost(req.body.sellpostid, () => {
            res.join(req.body)
        })
    }
};