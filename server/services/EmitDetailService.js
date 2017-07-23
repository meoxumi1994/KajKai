import { EmitDetail } from '../models'

export const createNewEmit = (info, next) => {
    const emitDetail = new EmitDetail(info)
    emitDetail.save(function (err) {
        if (err) next(null)
        else next(emitDetail)
    })
}

export const getEmit = (emitId, next) => {
    EmitDetail.findById(emitId, function (err, emitDetail) {
        if (err) next(null)
        else next(emitDetail)
    })
}

export const updateEmitInfo = (emitId, info, next) => {
    getEmit(emitId, function (emitDetail) {
        if (emitDetail) next(null)
        else {
            if (info.name) {
                emitDetail.name = info.name
            }
            if (info.lastTime) {
                emitDetail.lastTime = info.lastTime
            }
            emitDetail.save(function (err) {
                if (err) next(null)
                else next(emitDetail)
            })
        }
    })
}
