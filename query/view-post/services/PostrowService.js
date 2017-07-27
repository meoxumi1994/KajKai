import { Postrow, BasicStore } from '../models'

export const getPostrows = (requesterId, sellpostId, offset, next) => {
  Postrow.find({ sellpostId }, (err, postrows) => {
    if (err || !postrows) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          postrows_offset: offset,
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

export const getPostrowImageList = (requesterId, storeId, offset, next) => {
  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
      if (err || !basicStore) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            listImage: []
          })
        }
      } else {
        let { postrowImageList } = basicStore
        if (!postrowImageList) {
          postrowImageList = []
        }
        const mImageList = []
        let currentNumberOfImage = 0, mOffset, lastIndex
        for (let i = postrowImageList.length - 1; i >= 0; i--) {
          let image = postrowImageList[i]
          if (image.time < offset) {
            if (currentNumberOfImage < 14) {
              mImageList.push({
                url: image.url,
                time: image.time
              })

              mOffset = image.time.getTime()
              lastIndex = i
              currentNumberOfImage++
            } else {
              break
            }
          }
        }

        if (currentNumberOfImage < 14 || lastIndex == 0) {
          mOffset = -2
        }

        next({
          offset: mOffset,
          status: 'success',
          listImage : mImageList
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
      mPostrow.content = postrow.content ? postrow.content : ''
      mPostrow.numline = postrow.numberOfLine
      mPostrow.images = postrow.images ? postrow.images : []
      mPostrow.titles_order = postrow.titles ? postrow.titles.map(title => title.id) : []
      mPostrow.titles = postrow.titles ? postrow.titles : []
      mPostrow.products_order = postrow.products ? postrow.products.map(product => product.id) : []
      mPostrow.products = postrow.products ? postrow.products.map(product => ({
        id: product.id,
        content: product.content ? product.content : '',
        imageUrl: product.imageUrl,
        list: product.list ? product.list : [],
        totalnum: product.numberOfOrder
      })) : []
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
