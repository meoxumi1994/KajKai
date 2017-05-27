import {StorePostDetail} from '../models'

export const getPostDetailIntance = (raw) => {
    return new StorePostDetail(raw)
}

export const getListPostDetail = (list) => {
    var res = []
    for (var i = 0; i < list.length; ++i) {
        res.push(getPostDetailIntance(list[i]))
    }
    return res
}