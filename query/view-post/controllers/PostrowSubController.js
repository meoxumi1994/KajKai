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
    console.log('images: ', images);
    mPostrowImageList = images.map((image) => ({
      url: image,
      time: Date.now()
    }))

    console.log('mPostrowImageList: ', mPostrowImageList);

    BasicStore.findOne({ id: storeId }, (err, basicStore) => {
      if (basicStore) {
        let { postrowImageList } = basicStore
        if (!postrowImageList) {
          postrowImageList = []
        }
        mProductImageList.map((image) => {
          console.log('image: ', image);
          postrowImageList.push(image)
          console.log('postrowImageList: ', postrowImageList);
        })

        console.log('postrowImageList: ', postrowImageList);
        basicStore.postrowImageList = postrowImageList

        basicStore.save(() => {})
      }
    })
  }
  if (titles) postrow.titles = titles
  if (products && products.length > 0) {
    postrow.products = products
    mProductImageList = products.map((product) => ({
      url: product.imageUrl,
      time: Date.now()
    }))

    BasicStore.findOne({ id: storeId }, (err, basicStore) => {
      if (basicStore) {
        let { productImageList } = basicStore
        if (!productImageList) {
          productImageList = []
        }
        mProductImageList.map((image) => {
          productImageList.push(image)
        })
        basicStore.productImageList = productImageList

        basicStore.save(() => {})
      }
    })
  }
  if (type) postrow.type = type

  postrow.save(() => {})
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
    mPostrowImageList = images.map((image) => (
      new Image({
        url: image.url,
        time: Date.now()
      })
    ))

    Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
      if (sellpost) {
        BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
          if (basicStore) {
            let { postrowImageList } = basicStore
            if (!postrowImageList) {
              postrowImageList = []
            }
            postrowImageList = [...postrowImageList, ...mPostrowImageList]
            basicStore.postrowImageList = postrowImageList

            basicStore.save(() => {})
          }
        })
      }
    })
  }
  if (titles) mPostrow.titles = titles
  if (products && products.length > 0) {
    mPostrow.products = products
    mProductImageList = products.map((product) => (
      new Image({
        url: product.imageUrl,
        time: Date.now()
      })
    ))

    Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
      if (sellpost) {
        BasicStore.findOne({ id: sellpost.storeId }, (err, basicStore) => {
          if (basicStore) {
            let { productImageList } = basicStore
            if (!productImageList) {
              productImageList = []
            }
            productImageList = [...productImageList, ...mProductImageList]
            basicStore.productImageList = productImageList

            basicStore.save(() => {})
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
}
