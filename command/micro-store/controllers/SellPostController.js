import { addSellPost, deleteSellPost, updateSellPost, getSellPostBasicInfo } from '../services/SellPostService'

export const addSellPostCon = () => {
    return (req, res) => {
        console.log('add sell post ' + JSON.stringify(req.body));
        addSellPost(req.body, (sellPost, sellPostDetail) => {
            res.json({
                sellpost: {
                    ...getSellPostBasicInfo(sellPost),
                    postrows: sellPostDetail
                },
                status: 'success'
            })
        });
    }
};

export const updateSellPostCon = () => {
    return (req, res) => {
        updateSellPost(req.body, (sellPost) => {
            res.json({sellpost: req.body, status: 'success'})
        })
    }
};

export const deleteSellPostCon = () => {
    return (req, res) => {
        deleteSellPost(req.body.sellpostid, () => {
            res.join({sellpost: req.body, status: 'success'})
        })
    }
};