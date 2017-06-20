import mongoose from '../datasource'
import {AddressSchema} from './Address'

const StoreSchema = new mongoose.Schema({
    storeName: {type: String},
    address: {type: AddressSchema},
    phone: {type: String},
    category: {type: String},
    owner: {type: String},
    avatarUrl: {type: String},
    coverUrl: {type: String},
    imageUrl: {type: String},
});

export default StoreSchema;