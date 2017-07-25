import { Interest } from '../models'
import globalId from '../config/globalId'

export const INTEREST_GLOBAL_ID = globalId.INTEREST_GLOBAL_ID;

export const getInterestGlobalId = (id) => {
    return INTEREST_GLOBAL_ID + id;
};

export const getInterestLocalId = (id) => {
    if (!id) return null;
    return id.substring(3, id.length);
};

export const getInterest = (id, next) => {
    Interest.findById(getInterestLocalId(id), (err, interest) => {
        next(interest);
    })
};

export const addNewInterest = (userId, categoryId, longitude, latitude, next) => {
    const interest = new Interest({userId, categoryId, location: [longitude, latitude]});
    interest.save(() => {
        next(interest);
    })
};

export const removeInterest = (id, next) => {
    getInterest(id, (interest) => {
        interest.remove(() => {
            next();
        });
    })
};

export const getInterestPubInfo = (interest) => {
    return {
        userId: interest.userId,
        categoryId: interest.categoryId,

    }
};

export const getInterestWithIn = (longitude, latitude, categoryId, radius, next) => {
    let center = {type: "Point", coordinates: [longitude, latitude]};
    Interest.aggregate([{$match: {categoryId: categoryId}}, {$geoNear: {near: center, maxDistance: radius}}], (err, docs) => {
        console.log('this ' + err + ' ' + docs);
        let listUserId = [];
        if (docs && docs.length && docs.length > 0) {
            for (let i = 0; i < docs.length; ++i) listUserId.push(docs[i].userId);
        }
        next(listUserId);
    })
};