import { Image } from '../models'
import { ImageType } from '../enum'

export const getProductImageList = (requesterId, storeId, offset, next) => {
  Image.find({ storeId, type: ImageType.PRODUCT }, (err, productImageList) => {
      if (err || !productImageList) {
        if(err) {
          next(null)
        } else {
          next({
            offset: -2,
            status: 'success',
            listImage: []
          })
        }
      } else {
        productImageList.sort((i1, i2) => (i2.time - i1.time))
        const mImageList = []
        let currentNumberOfImage = 0, mOffset, lastIndex
        for (let i = productImageList.length - 1; i >= 0; i--) {
          let image = productImageList[i]
          if (image.time < offset) {
            if (currentNumberOfImage < 14) {
              mImageList.push({
                sellpostid: image.sellpostId,
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
