import {  BasicStore } from '../models'

export const getProductImageList = (requesterId, storeId, offset, next) => {
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
        let { productImageList } = basicStore
        if (!productImageList) {
          productImageList = []
        }
        const mImageList = []
        let currentNumberOfImage = 0, mOffset, lastIndex
        for (let i = productImageList.length - 1; i >= 0; i--) {
          let image = productImageList[i]
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
