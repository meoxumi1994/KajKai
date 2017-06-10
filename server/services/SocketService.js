import mongoose from '../datasource'
import { EmitSocketDetail } from '../models'
import { getUser } from '../services/UserService'
import { getStore } from '../services/StoreService'

export const getUserRoomId = (id) => {
    return 'room$' + id
}

export const getSubcriberIdList = (emitId, next) => {
    EmitSocketDetail.find({emitId: emitId}, function (err, list) {
        if (err || list.length === 0) next([])
        else next(list)
    })
}

export const addNewEmitSocketDetail = (emitId, id, next) => {
    const emitSocketDetail = new EmitSocketDetail({emitId: emitId, followerId: id})
    emitSocketDetail.save(function (err) {
        if (err) next(null)
        else {
            next(emitSocketDetail)
        }
    })
}

export const addNewEmitSocketDetailList = (emitId, listId, next) => {
    var docs = []
    console.log(listId)
    for (let id in listId) {
        const emitSocketDetail = new EmitSocketDetail({emitId: emitId, followerId: id})
        console.log(emitSocketDetail)
        docs.push(emitSocketDetail)
    }
    console.log(docs)
    EmitSocketDetail.insertMany(docs, function (err) {
        if (err) next(false)
        else next(true)
    })
}

export const removeEmitSocketDetail = (emitId, id, next) => {
    EmitSocketDetail.remove({emitId: emitId, followerId: id}, function (err) {
        if (err) next(null)
        else next(true)
    })
}

export const getDetailListRecur = (listId, index, next) => {
    if (index === 1) {
        getDetailFromId(listId[index - 1], function (detail) {
            next([detail])
        })
    } else {
        getDetailListRecur(listId, index - 1, function (detailList) {
            getDetailFromId(listId[index - 1], function (detail) {
                detailList.push(detail)
                next(detailList)
            })
        })
    }
}

export const getDetailList = (listId, next) => {
    getDetailListRecur(listId, listId.length, function (listDetail) {
        next(listDetail)
    })
}

export const getDetailFromId = (id, next) => {
    getUser(id, function (user) {
        if (user) next({id: user._id, avatarUrl: user.avatarUrl, name: user.name})
        else {
            getStore(id, function (store) {
                if (store) {
                    next({id: store._id, avatarUrl: store.avatarUrl, name: store.name})
                } else {
                    next({id: id})
                }
            })
        }
    })
}

export const getSubcriberDetailList = (emitId, next) => {
    getSubcriberIdList(emitId, function (idList) {
        if (idList.length === 0) next(idList)
        else {
            getDetailList(idList, function (detailList) {
                next(detailList)
            })
        }
    })
}

export const getEmitListDetail = (emitIdlist, next) => {
    getEmitListDetailRecur(emitIdlist, emitIdlist.length, function (emitListDetail) {
        next(emitListDetail)
    })
}

export const getEmitListDetailRecur = (emitIdList, index, next) => {
    if (index === 0) {
        next([])
    } else {
        getEmitListDetailRecur(emitIdList, index - 1, function (emitListDetail) {
            getSubcriberDetailList(emitIdList[index - 1], function (subcriberDetailList) {
                emitListDetail[index - 1] = {...emitListDetail[index - 1], followers: subcriberDetailList}
                next(emitListDetail)
            })
        })
    }
}

export const emitDataToOneUser = (emitId, data, type, userId, sio) => {
    sio.to(getUserRoomId(userId)).emit('action', {type: type, data: data})
}

export const emitDataToGroupUser = (emitId, data, type, listUserId, sio) => {
    for (let id in listUserId) {
        emitDataToOneUser(emitId, data, type, id, sio)
    }
}

export const emitDataToUser = (emitId, data, type, sio) => {
    getSubcriberIdList(emitId, function (subcriberId) {
        for (let id in subcriberId) {
            emitDataToOneUser(emitId, data, type, id, sio)
        }
    })
}

export const getEmitDetail = (emitId, next) => {

}
