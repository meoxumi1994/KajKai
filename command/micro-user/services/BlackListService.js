import { BlackList } from '../models'
import { getUser } from '../services/UserService'
import { getStore, updateBlackList } from '../controllers/UserPubController'

export const checkBlackList = (userId, blockId, next) => {
    BlackList.findOne({userId: userId, blockId: blockId}, function (err, block) {
        if (!block) {
            addBlackList(userId, blockId, (newBlock) => {
                updateBlackList(userId, blockId, 'add');
                next(newBlock, 'ADD')
            })
        } else {
            removeBlackList(userId, blockId, () => {
                updateBlackList(userId, blockId, 'remove');
                next(block, 'REMOVE')
            })
        }

    })
};

export const addBlackList = (userId, blockId, next) => {
    switch (blockId) {
        case blockId.startsWith('001'): {
            getUser(blockId, (user) => {
                const block = new BlackList({userId: userId, blockId: blockId, name: user.userName});
                block.save(function () {
                    next(block)
                })
            });
            break
        }
        case blockId.startsWith('002'): {
            getStore(blockId, (store) => {
                const block = new BlackList({userId: userId, blockId: blockId, name: store.storename});
                block.save(function () {
                    next(block)
                })
            });
            break
        }
        case blockId.startsWith('010'): {
            console.log('fuck you');
            break
        }
    }
};

export const removeBlackList = (userId, blockId, next) => {
    BlackList.remove({userId: userId, blockId: blockId}, () => {
        next()
    })
};