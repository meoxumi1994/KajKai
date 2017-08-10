import { BlackList } from '../models'
import { addBlackListPub, removeBlackListPub } from '../controllers/UserPubController'

export const addBlackList = (userId, blockId, next) => {
    const block = new BlackList({userId: userId, blockId: blockId});
    block.save(() => {
        next(getBlackListPubInfo(block));
        addBlackListPub(getBlackListPubInfo(block));
    });
};

export const removeBlackList = (id, next) => {
    BlackList.findByIdAndRemove(id, () => {
        next();
        removeBlackListPub(id)
    })
};

export const getBlackList = (userId, blockId, next) => {
    BlackList.findOne({userId, blockId}, (err, block) => {
        if (block) {
            next(block);
        } else {
            next(null);
        }
    })
};

export const getBlackListPubInfo = (block) => {
    return {
        userId: block.userId,
        blockId: block.blockId,
        id: block._id
    }
};