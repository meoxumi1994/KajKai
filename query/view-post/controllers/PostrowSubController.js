import { Sellpost, Postrow } from '../models'

export const createPostrow = (message) => {
  const { sellPostId: sellpostId, postrowId: id, content, numline: numberOfLine, images, titles, products, type } = message.postrow
  const postrow = new Postrow({
    sellpostId, id
  })

  if (content) postrow.content = content
  if (numberOfLine) postrow.numberOfLine = numberOfLine
  if (images) postrow.images = images
  if (titles) postrow.titles = titles
  if (products) postrow.products = products
  if (type) postrow.type = type

  postrow.save(() => {})
}

export const updatePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId, content, numline: numberOfLine, images, titles, products, type } = message.postrow
  const mPostrow = {}

  if (sellpostId) mPostrow.sellpostId = sellpostId
  if (content) mPostrow.content = content
  if (numberOfLine) mPostrow.numberOfLine = numberOfLine
  if (images) mPostrow.images = images
  if (titles) mPostrow.titles = titles
  if (products) mPostrow.products = products
  if (type) mPostrow.type = type

  Postrow.findOneAndUpdate({ id }, mPostrow, () => {})
}

export const deletePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId } = message.postrow
  Postrow.remove({ id }, () => {})
}
