import mongoose from '../datasource'
import { ProductSchema } from './Product'

export const OrderDetailSchema = new mongoose.Schema({
    product: {type: ProductSchema},
    quantity: {type: Number},
    price: {type: Number}
});
