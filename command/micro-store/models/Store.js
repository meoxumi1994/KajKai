import mongoose from '../datasource'
import CertificateSchema from './Certificate'


const StoreSchema = new mongoose.Schema({
    storeName: {type: String},
    phone: {type: String},
    category: {type: String},
    owner: {type: String},
    avatarUrl: {type: String},
    coverUrl: {type: String},
    imageUrl: {type: String},
    address: {type: String},
    addressMap: [String],
    categoryAuto: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
    certificates: {type: CertificateSchema}
});

export default StoreSchema;