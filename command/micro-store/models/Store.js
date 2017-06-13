import mongoose from '../datasource'
import {AddressSchema} from './Address'

export const StoreSchema = new mongoose.Schema({
    storeName: {type: String},
    address: {type: AddressSchema},
    phone: {type: String},
    category: {type: String},
    owner: {type: String},
    avatarUrl: {type: String},
    imageUrl: {type: String},
    mainPostId: {type: String}
});

