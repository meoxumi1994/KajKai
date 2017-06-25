import { OrderDetail, Product } from '../models'

export const getOrderDetail = (raw) => {
    const product = new Product({productId: raw.id, content: raw.content, imageUrl: raw.imageUrl, list: raw.list});
    return new OrderDetail({product: product, quantity: raw.num})
};

export const getOrderDetailInfo = (orderDetail) => {
    return {
        id: orderDetail.product.productId,
        content: orderDetail.product.content,
        imageUrl: orderDetail.product.imageUrl,
        list: orderDetail.product.list,
        num: orderDetail.quantity
    }
};

// export const getTotalPrice = (orderDetail) => {
//     return orderDetail.quantity * orderDetail.price
// };