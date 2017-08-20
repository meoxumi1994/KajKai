import { Sellpost, Postrow, Image, BasicStore } from '../models'

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
  }
  if (titles) postrow.titles = titles
  if (products && products.length > 0) {
    postrow.products = products
  }
  if (type) postrow.type = type

  postrow.save(() => {
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        let image = images[i]
        if (image) {
          mPostrowImageList.push(
            new Image({
              url: image,
              time: Date.now(),
              postrowId: id
            })
          )
        }
      }

      BasicStore.findOne({ id: storeId }, (err, basicStore) => {
        if (basicStore) {
          let { postrowImageList } = basicStore
          if (!postrowImageList) {
            postrowImageList = []
          }
          mPostrowImageList.map((image) => {
            postrowImageList.push(image)
          })

          BasicStore.findOneAndUpdate({ id: storeId }, { postrowImageList }, () => {})
        }
      })

      if (products && products.length > 0) {
        for (let i = 0; i < products.length; i++) {
          let product = products[i]
          if (product && product.imageUrl) {
            mProductImageList.push(
              new Image({
                url: product.imageUrl,
                time: Date.now(),
                postrowId: id
              })
            )
          }
        }

        BasicStore.findOne({ id: storeId }, (err, basicStore) => {
          if (basicStore) {
            let { productImageList } = basicStore
            if (!productImageList) {
              productImageList = []
            }
            mProductImageList.map((image) => {
              productImageList.push(image)
            })
            BasicStore.findOneAndUpdate({ id: storeId }, { productImageList }, () => {})
          }
        })
      }
    }
  })
}

export const updatePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId, content, numline: numberOfLine, images, titles, products, type } = message.postrow
  const mPostrow = {}
  let mPostrowImageList = [], mProductImageList = []

  if (sellpostId) mPostrow.sellpostId = sellpostId
  if (content) mPostrow.content = content
  if (numberOfLine) mPostrow.numberOfLine = numberOfLine
  if (images && images.length > 0) {
    mPostrow.images = images
    for (let i = 0; i < images.length; i++) {
      let image = images[i]
      if (image) {
        mPostrowImageList.push(
          new Image({
            url: image,
            time: Date.now()
          })
        )
      }
    }

    Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
      if (sellpost) {
        BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
          if (basicStore) {
            let { postrowImageList } = basicStore
            if (!postrowImageList) {
              postrowImageList = []
            }
            mPostrowImageList.map((image) => {
              postrowImageList.push(image)
            })
            BasicStore.findOneAndUpdate({ id: storeId }, { postrowImageList }, () => {})
          }
        })
      }
    })
  }
  if (titles) mPostrow.titles = titles
  if (products && products.length > 0) {
    mPostrow.products = products
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      if (product && product.imageUrl) {
        mProductImageList.push(
          new Image({
            url: product.imageUrl,
            time: Date.now()
          })
        )
      }
    }

    Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
      if (sellpost) {
        BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
          if (basicStore) {
            let { productImageList } = basicStore
            if (!productImageList) {
              productImageList = []
            }
            mProductImageList.map((image) => {
              productImageList.push(image)
            })
            BasicStore.findOneAndUpdate({ id: storeId }, { productImageList }, () => {})
          }
        })
      }
    })
  }
  if (type) mPostrow.type = type

  Postrow.findOneAndUpdate({ id }, mPostrow, () => {})
}

export const deletePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId } = message.postrow
  Postrow.remove({ id }, () => {})

  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
        let { postrowImageList } = basicStore
        if (!postrowImageList) {
          postrowImageList = []
        }
        let mPostrowImageList = []
        postrowImageList.map((image) => {
          if (image.postrowId != id) {
            mPostrowImageList.push(image)
          }
        })

        BasicStore.findOneAndUpdate({ id: storeId }, { postrowImageList: mPostrowImageList }, () => {})
      })

      BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
        let { productImageList } = basicStore
        if (!productImageList) {
          productImageList = []
        }
        let mProductImageList = []
        productImageList.map((image) => {
          if (image.postrowId != id) {
            mProductImageList.push(image)
          }
        })

        BasicStore.findOneAndUpdate({ id: storeId }, { productImageList: mProductImageList }, () => {})
      })
    }
  })
}
