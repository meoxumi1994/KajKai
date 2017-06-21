import { SellPostDetail } from '../models'

const SELLPOST_DETAIL_GLOBAL_ID = require('../config/globalId').SELLPOST_DETAIL_GLOBAL_ID

export const getSellPostDetailLocalId = (id) => {
    if (id.length <= 3) return id;
    return id.substr(3, id.length - 3);
};

export const getSellPostDetailGlobalId = (id) => {
    return SELLPOST_DETAIL_GLOBAL_ID + id
};

export const getSellPostDetail = (sellPostDetailId, next) => {
    SellPostDetail.findById(getSellPostDetailLocalId(sellPostDetalId), (err, sellPostDetail) => {
        next(sellPostDetail)
    })
};

export const getSellPostDetailBasicInfo = (sellPostDetail) => {
    return {

    }
};

