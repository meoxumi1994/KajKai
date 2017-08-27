import { Interest } from '../models'
import globalId from '../config/globalId'
import redis from 'redis'
import config from '../config/pubSubConfig'
import { addInterestPub, removeInterestPub, newStoreInterestPub } from '../controllers/NotificationPubController'

let redisClient = redis.createClient(config);

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
    interest.save((err) => {
        console.log('INTEREST ERR ' + (err ? JSON.stringify(err) : null));
        getInterestInfo(interest, (info) => {
            next(getInterestDisplayInfo(info));
            addInterestPub(info);
        });

    })
};

export const getInterestDisplayInfo = (info) => {
    return {
        userId: info.userId,
        categoryId: info.categoryId,
        categoryName: info.categoryName,
        position: {
            lng: info.longitude,
            lat: info.latitude
        },
        id: info.id
    }
};

export const removeInterest = (userId, id, next) => {
    getInterest(id, (interest) => {
        if (userId !== interest.userId) {
            next(null, id);
            return;
        }
        interest.remove((err) => {
            next(err, id);
            getInterestInfo(interest, (info) => {
                removeInterestPub(info);
            });
        });
    })
};

export const getInterestInfo = (interest, next) => {
    redisClient.hget('category', interest.categoryId, (err, rep) => {
        next({
            userId: interest.userId,
            categoryId: interest.categoryId,
            categoryName: rep,
            longitude: interest.location[0],
            latitude: interest.location[1],
            id: getInterestGlobalId(interest._id)
        })
    });
};


export const getInterestWithIn = (longitude, latitude, categoryId, radius, next) => {
    let center = {type: "Point", coordinates: [longitude, latitude]};
    Interest.aggregate([{$geoNear: {
            near: center,
            maxDistance: radius,
            distanceField: "dist.calculated",
            spherical: true}},
        {$match: {categoryId: categoryId}}], (err, docs) => {
        console.log('this ' + err + ' ' + docs);
        let listUserId = [];
        if (docs && docs.length && docs.length > 0) {
            for (let i = 0; i < docs.length; ++i) listUserId.push(docs[i].userId);
        }
        next(listUserId);
    })
};

export const publishNewInterest = (store) => {
    getInterestWithIn(store.longitude, store.latitude, store.secondCategoryId, 30000, (listId) => {
        if (listId.length === 0) return;
        newStoreInterestPub(store, listId);
    })
};

