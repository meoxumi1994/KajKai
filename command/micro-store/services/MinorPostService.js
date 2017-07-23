import { MinorPost } from '../models'
import globalId from '../config/globalId'
import { minorPostCreatedPub, minorPostUpdatedPub } from '../controllers/StorePubController'

const MINOR_GLOBAL_ID = globalId.MINORPOST_GLOBAL_ID;

export const getMinorPostGlobalId = (id) => {
    return MINOR_GLOBAL_ID + id;
};

export const getMinorPostLocalId = (id) => {
    if (id.length <= 3) return id;
    return id.substr(3, id.length - 3);
};

// const MinorPostSchema = new mongoose.Schema({
//     storeId: {type: String},
//     lineCount: {type: Number},
//     content: {type: String},
//     time: {type: Number},
//     images: [String],
//     video: {type: String},
// });

export const getMinorPost = (id, minorPost) => {
    MinorPost.findById(getMinorPostLocalId(id), (err, minorPost) => {
        if (err || !minorPost) {
            next(null);
        } else {
            next(minorPost);
        }
    })
};

export const createNewMinorPost = (minorPostInfo, next) => {
    if (!minorPostInfo.storeId) {
        next('storeid');
        return;
    }
    if (!minorPostInfo.content || !minorPostInfo.numline) {
        next('content');
        return;
    }
    const minorPost = new MinorPost({
        storeId: minorPostInfo.storeid,
        lineCount: minorPostInfo.numline,
        content: minorPostInfo.content,
        time: minorPostInfo.time ? minorPostInfo.time : (new Date()).getTime(),
        images: minorPostInfo.images ? minorPostInfo.images : [],
        video: minorPostInfo.video
    });

    minorPost.save(() => {
        next(getMinorPostClientInfo(minorPost));
        minorPostCreatedPub(getMinorPostPubInfo(minorPost));
    })
};

export const updateMinorPost = (minorPostInfo, next) => {
    getMinorPost(minorPostInfo.id, (minorPost) => {
        if (!minorPost) {
            next(null);
            return;
        }
        if (minorPostInfo.content) minorPost.content = minorPostInfo.content;
        if (minorPostInfo.numline) minorPost.lineCount = minorPostInfo.numline;
        if (minorPostInfo.time) minorPost.time = minorPostInfo.time;
        if (minorPostInfo.images) minorPost.images = minorPostInfo.images;
        if (minorPostInfo.video) minorPost.video = minorPostInfo.video;
        minorPost.save(() => {
            next(getMinorPostClientInfo(minorPost));
            minorPostUpdatedPub(getMinorPostPubInfo(minorPost));
        })
    })
};

export const getMinorPostPubInfo = (minorPost) => {
    return {
        minorPostId: getMinorPostGlobalId(minorPost._id),
        storeId: minorPost.storeId,
        lineCount: minorPost.lineCount,
        content: minorPost.content,
        time: minorPost.time,
        images: minorPost.images,
        video: minorPost.video
    }
};

export const getMinorPostClientInfo = (minorPost) => {
    return {
        id: getMinorPostGlobalId(minorPost._id),
        storeid: minorPost.storeId,
        numline: minorPost.lineCount,
        content: minorPost.content,
        time: minorPost.time,
        images: minorPost.images,
        video: minorPost.video
    }
};

