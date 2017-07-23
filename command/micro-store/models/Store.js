import mongoose from '../datasource'
import CertificateSchema from './Certificate'

const StoreSchema = new mongoose.Schema({
    storeName: {type: String},
    urlName: {type: String},
    phone: {type: String},
    category: {type: String},
    firstCategoryId: {type: String},
    secondCategoryId: {type: String},
    owner: {type: String},
    avatarUrl: {type: String},
    coverUrl: {type: String},
    imageUrl: {type: String},
    address: {type: String},
    addressMap: [String],
    longitude: {type: Number},
    latitude: {type: Number},
    certificates: {type: CertificateSchema},
    createdAt: {type: Number},
    lastUpdateStoreName: {type: Number},
    lastUpdateAvatarUrl: {type: Number},
    lastUpdateCoverUrl: {type: Number}
});

export default StoreSchema;