import { Store } from '../models'

export const getStore = (id, next) => {
    Store.findOne({ id },  (err, store) => {
        if (err) {
            next(null)
        } else {
          const { likers, followers } = store
            next({
              id: store.id,
              userid: store.userId,
              storename: store.storeName,
              avatarUrl: store.avatarUrl,
              coverUrl: store.coverUrl,
              lastUpdate: store.lastUpdate,
              address: store.address,
              addressMap: store.addressMap,
              category: store.category,
              categoryAuto: store.categoryAuto,
              latitute: store.address.latitude,
              longitute: store.address.longitude,
              phone: store.phone,
              certificates: store.certificates,
              numberOfLike: store.likeNumber,
              likes: likers.slice(0, 5),
              numfollow: store.numerOfFollow,
              follows: followers.slice(0, 5),
            })
        }
    })
}
//
// export const getStoreLocalId = (id) => {
//     if (id.length <= 3) return id
//     else return id.substr(3, id.length)
// }
//
// export const getStoreGlobalId = (id) => {
//     return GLOBAL_STORE_ID + id
// }
//
// export const getStoreInfoService = (store) => {
//     return {
//         storeName: store.storename,
//         address: store.address,
//         phone: store.phone,
//         category: store.category,
//         id: getStoreGlobalId(store._id),
//         avatarUrl: store.avatarUrl,
//         coverUrl: store.coverUrl,
//         owner: store.owner,
//         mainPostId: store.mainPostId
//     }
// }
//
// export const getStoreBasicInfoService = (store) => {
//     return {
//         storeName: store.storeName,
//         id: getStoreGlobalId(store._id),
//         avatarUrl: store.avatarUrl,
//         coverUrl: store.coverUrl
//     }
// }
//
// export const validateStore = (store) => {
//     if (!store.phone || !checkPhone(store.phone)) return false
//     if (!store.address) return false
//     if (!store.storename || store.storename.length < 5 || store.storename.length > 50) return false
//     return true
// }
//
// export const addNewStore = (_ownerId, _storename, _address, _phone, _category, next) => {
//     var store = new Store({ storeName: _storename,
//                             address: _address,
//                             phone: _phone,
//                             category: _category,
//                             owner: _ownerId})
//     if (!validateStore(store)) {
//         next(null)
//         return
//     }
//     createNewPost(store._id, (new Date()).getTime(), null, 'MAIN', function (storePost) {
//         store.mainPostId = storePost._id
//         store.save(function () {
//             next(store)
//         })
//     })
// }
//
// export const modifyStore = (updateStore, next) => {
//     // var id = up, _ownerId, _storename, _address, _phone, _category, _longitude, _latitude
//     var id = updateStore.id
//     var _ownerId = updateStore.owner
//
//     getStore(id, function (store) {
//         if (!store) {
//             next({status: 'error'})
//         } else {
//             if (_ownerId !== store.owner) {
//                 next({status: 'unauthorize'})
//                 return
//             }
//             if (updateStore.storename) store.storename = updateStore.storename
//             if (updateStore.address) store.address = updateStore.address
//             if (updateStore.phone) store.phone = updateStore.phone
//             if (updateStore.category) store.category = updateStore.category
//             if (updateStore.longitude) store.longitude = updateStore.longitude
//             if (updateStore.latitude) store.latitude = updateStore.latitude
//             if (updateStore.avatarUrl) store.avatarUrl = updateStore.avatarUrl
//             if (updateStore.coverUrl) store.coverUrl = updateStore.coverUrl
//
//             store.save(function(err){
//                 if (err) {
//                     next({status: 'err'})
//                 } else {
//                     next({status: 'success'})
//                 }
//             })
//         }
//     })
// }
//
// export const findStoreList = (ownerId, next) => {
//     Store.find({owner: ownerId}, function (err, stores) {
//         if (err) {
//             next(null)
//         } else {
//             var storeList = []
//             for (var i = 0, mLength = stores.length; i < mLength; ++i) {
//                 storeList.push(getStoreBasicInfoService(stores[i]))
//             }
//             next(storeList)
//         }
//     })
// }
//
// export const getMainPost = (storeId, next) => {
//     getStore(storeId, function (store) {
//         if (!store) next(null)
//         else {
//             if (!store.mainPostId) {
//                 var mainPost = new StorePost({storeId: store._id});
//                 mainPost.save(function () {
//                     store.mainPostId = mainPost._id;
//                     store.save(function(err){
//                         if (!err) next(mainPost)
//                         else next(null)
//                     })
//                 })
//
//             } else {
//                 getPost(store.mainPostId, function (err, post) {
//                     if (err) next(null)
//                     else next(post)
//                 })
//             }
//         }
//     })
// }
//
// export const getStoreByPostId = (id, next) => {
//     getPost(id, function (storePost) {
//         if (!storePost) next(null)
//         else {
//             getStore(storePost.storeId, function (store) {
//                 next(store)
//             })
//         }
//     })
// }
