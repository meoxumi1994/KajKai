import { BlackList } from '../models'
import { addBlackListPub, removeBlackListPub } from '../controllers/UserPubController'

export const addBlackList = (userId, blockId, next) => {
    BlackList.findOne({userId, blockId}, (err, bbb) => {
        if (bbb) next(null);
        else {
            const block = new BlackList({userId: userId, blockId: blockId});
            block.save(() => {
                next(getBlackListPubInfo(block));
                addBlackListPub(getBlackListPubInfo(block));
            });
        }
    });
};

export const removeBlackList = (id, next) => {
    BlackList.findByIdAndRemove(id, (err, block) => {
        next();
        removeBlackListPub(getBlackListPubInfo(block));
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