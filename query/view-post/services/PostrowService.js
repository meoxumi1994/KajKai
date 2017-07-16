import { Postrow } from '../models'

export const getPostrows = (sellpostId, offset, next) => {
  Postrow.find({ sellpostId }, (err, postrows) => {
    if (err || !postrows) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          offset,
          postrows: []
        })
      }
    } else {
      next({
        status: 'success',
        ...getClientFormatPostrows(postrows, offset)
      })
    }
  })
}

export const getClientFormatPostrows = (postrows, offset) => {
  if (!postrows) {
    return {
      postrows_offset: offset,
      postrows: []
    }
  }
  const mPostrows = []

  let currentNumberOfLine = 0, postrowOffset = -1

  for (let i = offset + 1; i < postrows.length; i++) {
    let postrow = postrows[i]
    if (currentNumberOfLine + 0.5 * postrow.numberOfLine < 30) {

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
      mPostrow.type = postrow.type

      mPostrows.push(mPostrow)
      currentNumberOfLine += postrow.numberOfLine
      postrowOffset = i
    } else {
      break
    }
  }

  return ({
    postrows_offset: postrowOffset,
    postrows: mPostrows
  })
}
