import { Sellpost, Postrow, Image } from '../models'
import { ImageType } from '../enum'

export const createPostrow = (message) => {
  const { storeId, sellPostId: sellpostId, postrowId: id, content, numline: numberOfLine, images, titles, products, type } = message.postrow
  const postrow = new Postrow({
    sellpostId, id
  })

  let mPostrowImageList = [], mProductImageList = []

  if (content) postrow.content = content
  if (numberOfLine) postrow.numberOfLine = numberOfLine
  if (images && images.length > 0) {
    postrow.images = images
    for (let i = 0; i < images.length; i++) {
      let image = images[i]
      if (image) {
        let mImage = new Image({
          url: image,
          time: Date.now(),
          postrowId: id,
          storeId,
          type: ImageType.POSTROW
        })

        mImage.save(() => {})
      }
    }
  }
  if (titles) postrow.titles = titles
  if (products && products.length > 0) {
    postrow.products = products
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      if (product && product.imageUrl) {
        let mImage = new Image({
          url: product.imageUrl,
          time: Date.now(),
          postrowId: id,
          storeId,
          type: ImageType.PRODUCT
        })

        mImage.save(() => {})
      }
    }
  }
  if (type) postrow.type = type

  postrow.save(() => {})
}

export const deletePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId } = message.postrow
  Postrow.remove({ id }, () => {})
  Image.remove({ postrowId: id }, () => {})
}
