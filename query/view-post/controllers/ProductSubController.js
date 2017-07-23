import { Sellpost, Postrow, Product } from '../models'

export const createProduct = (message) => {
  const { sellPostId: sellpostId, postrowsId: postrowId, productId: id, product: productInfo } = message.product
  const product = new Product({
    id
  })

  if (productInfo) {
    product.content = productInfo.content
    product.imageUrl = productInfo.imageUrl
    product.list = productInfo.list
  }

  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      const { postrows } = sellpost
      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (postrow.id == postrowId) {
          postrow.products.push(product)
          postrows[i] = postrow
          sellpost.postrows = postrows
          sellpost.save(() => {})
          break
        }
      }
    }
  })
}

export const updateProduct = (message) => {
  const { sellPostId: sellpostId, postrowsId: postrowId, productId: id, product: productInfo } = message.product
  const product = {}

  if (productInfo) {
    product.content = productInfo.content
    product.imageUrl = productInfo.imageUrl
    product.list = productInfo.list
  }

  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      const { postrows } = sellpost
      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (postrow.id == postrowId) {
          const { products } = postrow
          for (let k = 0; k < products.length; k++) {
            let currentProduct = products[k]
            if (currentProduct.id == id) {
              products[k] = { currentProduct, ...product }
              postrow.products = products

              postrows[i] = postrow
              sellpost.postrows = postrows

              sellpost.save(() => {})
              break
            }
          }
          break
        }
      }
    }
  })
}

export const deleteProduct = (message) => {
  const { sellPostId: sellpostId, postrowsId: postrowId, productId: id } = message.product
  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      const { postrows } = sellpost
      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (postrow.id == postrowId) {
          const { products } = postrow
          for (let k = 0; k < products.length; k++) {
            if (products[k].id == id) {
              products.splice(k, 1)
              postrow.products = products

              postrows[i] = postrow
              sellpost.postrows = postrows

              sellpost.save(() => {})
              break
            }
          }
          break
        }
      }
    }
  })
}
