import mongoose from '../datasource'
import { EmitSocketDetail, EmitDetail } from '../models'
import { getUser } from '../services/UserService'
import { getStore } from '../services/StoreService'

export const getUserRoomId = (id) => {
    return 'room$' + id
}

export const getSubcriberIdList = (emitId, next) => {
    EmitSocketDetail.find({emitId: emitId}, function (err, list) {
        if (err || list.length === 0) next([])
        else {
            var idList = []
            for (var i = 0; i < list.length; ++i)
                idList.push(list[i].followerId)
            next(idList)
        }
    })
}

export const addNewEmitSocketDetail = (emitId, id, next) => {
    EmitSocketDetail.findOne({emitId: emitId, followerId: id}, function (err, reply) {
        if (err) next(null)
        else {
            if (reply) next(reply)
            else {
                const emitSocketDetail = new EmitSocketDetail({emitId: emitId, followerId: id})
                emitSocketDetail.save(function (err) {
                    if (err) next(null)
                    else {
                        next(emitSocketDetail)
                    }
                })
            }
        }
    })
}

export const addNewEmitSocketDetailList = (emitId, listId, next) => {
    var docs = []
    for (var i = 0, sz = listId.length; i < sz; ++i) {
        const emitSocketDetail = new EmitSocketDetail({emitId: emitId, followerId: listId[i]})
        docs.push(emitSocketDetail)
    }
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
    if (index <= 0) {
        next([])
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
    console.log('fuck ' + id)
    getUser(id, function (user) {
        if (user) {
            console.log('shit ' + user)
            next({id: user._id, avatarUrl: user.avatarUrl, name: user.name})
        }
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
            console.log('idList ' + idList)
            getDetailList(idList, function (detailList) {
                console.log('detailList ' + detailList)
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
                getEmitDetail(emitIdList[index - 1], function (emitDetail) {
                    console.log('this ' + emitDetail)
                    emitListDetail.push({lastTime: emitDetail.lastTime, _id: emitDetail._id, name: emitDetail.name, followers: subcriberDetailList})
                    next(emitListDetail)
                })
            })
        })
    }
}

export const emitDataToOneUser = (emitId, data, type, userId, sio) => {
    sio.to(getUserRoomId(userId)).emit('action', {type: type, data: data})
}

export const emitDataToGroupUser = (emitId, data, type, listUserId, sio) => {
    for (var i = 0, sz = listUserId.length; i < sz; ++i) {
        emitDataToOneUser(emitId, data, type, listUserId[i], sio)
    }
}

export const emitDataToUser = (emitId, data, type, sio) => {
    getSubcriberIdList(emitId, function (subcriberId) {
        for (var i = 0, sz = subcriberId.length; i < sz; ++i) {
            emitDataToOneUser(emitId, data, type, subcriberId[i], sio)
        }
    })
}

export const getEmitDetail = (emitId, next) => {
    EmitDetail.findById(emitId, function (err, emitDetail) {
        if (err) next({_id: emitId})
        else {
            next(emitDetail)
        }
    })
}
