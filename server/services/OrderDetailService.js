import mongoose from '../datasource'
import {OrderDetail, Product} from '../models'

export const getOrderDetail = (raw) => {
    const product = new Product({productName: raw.productName, productCategory: raw.productCategory, productDescription: raw.productDescription})
    return new OrderDetail({product: product, quantity: raw.quantity, price: raw.price})
}

export const getTotalPrice = (orderDetail) => {
    return orderDetail.quantity * orderDetail.price
}