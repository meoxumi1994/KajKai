import { Sellpost } from '../models'

export const getPostrows = (sellpostId, offset, next) => {
  Sellpost.find({ sellpostId }, (err, sellpost) => {
    if (err || !sellpost) {
      if(err) {
        next(null)
      } else {
        next({
          offset,
          postrows: []
        })
      }
    } else {
      const { postrows } = sellpost
      next(getClientFormatPostrows(postrows, offset))
    }
  })
}

export const getClientFormatPostrows = (postrows, offset) => {
  if (!postrows) {
    return {
      postrows_offset: offset,
      postrows: [],
      postrow_order: []
    }
  }
  const postrowOrder = [], mPostrows = []

  let currentNumberOfLine = 0, postrowOffset = -1

  for (let i = offset + 1; i < postrows.length; i++) {
    let postrow = postrows[i]
    if (currentNumberOfLine + 0.5 * postrow.numberOfLine < 30) {
      postrowOrder.push(postrow.id)

      let mPostrow = {}
      mPostrow.sellpostid = postrow.sellpostId
      mPostrow.id = postrow.id
      mPostrow.content = postrow.content
      mPostrow.numline = postrow.numberOfLine
      mPostrow.images = postrow.images
      mPostrow.titles_order = postrow.titles.map(title => title.id)
      mPostrow.titles = postrow.titles
      mPostrow.products = postrow.products.map(product => ({
        id: product.id,
        content: product.content,
        imageUrl: product.imageUrl,
        list: product.list,
        totalnum: product.numberOfOrder
      }))
      mPostrows.type = postrow.type

      mPostrows.push(mPostrow)
      currentNumberOfLine += postrow.numberOfLine
      postrowOffset = i
    } else {
      break
    }
  }

  return ({
    postrows_offset: postrowOffset,
    postrow_order: postrowOrder,
    postrows: mPostrows
  })
}
