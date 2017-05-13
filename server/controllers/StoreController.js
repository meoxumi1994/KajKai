import config from '../config/serverConfig'
import { addNewStore } from '../services/StoreService.js'
// console.log(StoreService)

export const registerStore = () => {
    return (req, res) => {
        let body = req.body
        let storename = body.storename
        let address = body.address
        let phone = body.phone
        let category = body.category
        let longitude = body.longitude
        let latitude = body.latitude
        console.log(req.decoded)
        let ownerId = req.decoded._id
        addNewStore(ownerId, storename, address, phone, category, longitude, latitude,
            function (store) {
                if (!store) {
                    res.json({status: 'error'})
                } else {
                    res.json({status: 'success', store: store})
                }
            })
    }
}
