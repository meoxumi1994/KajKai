import { createSellPostDetail, updateSellPostDetail, dellSellPostDetail, getSellPostDetailBasicInfo } from '../services/SellPostDetailService'
import { updateSellPost } from '../services/SellPostService'

export const createSellPostDetailCon = () => {
    return (req, res) => {
        createSellPostDetail(req.body, (sellpostDetail) => {
            res.json({...req.body, id: getSellPostDetailBasicInfo(sellpostDetail).id});
        })
    }
};

export const updateSellPostDetailCon = () => {
    return (req, res) => {
        updateSellPostDetail(req.body.id, req.body, (sellPostDetail) => {
            res.json(req.body)
        })
    }
};

export const dellSellPostDetailCon = () => {
    return (req, res) => {
        dellSellPostDetail(req.body.id, (sellPostDetail) => {
            updateSellPost({sellpostid: req.body.sellpostid, products_order: req.body.postrows_order}, () => {
                res.json(req.body)
            })
        })
    }
};