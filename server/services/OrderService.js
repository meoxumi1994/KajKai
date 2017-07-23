import mongoose from '../datasource'
import {getOrderDetail, getTotalPrice} from './OrderDetailService'

export const getOrder = (raw) => {
    const length = 0
    var totalPrice = 0
    var listOrderDetail = []
    for (var i = 0; i < length; ++i) {
        const orderDetail = getOrderDetail(raw[i])
        totalPrice += getTotalPrice(orderDetail)
        listOrderDetail.push(orderDetail)
    }
    return new Order({totalPrice: totalPrice, orderDetails: listOrderDetail})
}