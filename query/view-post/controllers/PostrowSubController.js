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

  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      let { postrows } = sellpost
      if (!postrows) {
        setTimeout(() => {
          Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
            if (sellpost) {
              let { postrows } = sellpost
              if (!postrows) {
                postrows = []
              }
              postrows.push(postrow)
              sellpost.postrows = postrows
              sellpost.save()
            }
          })
        }, 200)
      } else {
        postrows.push(postrow)
        sellpost.postrows = postrows
        sellpost.save()
      }
    } else {
      setTimeout(() => {
        Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
          if (sellpost) {
            let { postrows } = sellpost
            if (!postrows) {
              postrows = []
            }
            postrows.push(postrow)
            sellpost.postrows = postrows
            sellpost.save()
          }
        })
      }, 200)
    }
  })
}

export const updatePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId, content, numline: numberOfLine, images, titles, products, type } = message.postrow
  const mPostrow = {}

  if (content) mPostrow.content = content
  if (numberOfLine) mPostrow.numberOfLine = numberOfLine
  if (images) mPostrow.images = images
  if (titles) mPostrow.titles = titles
  if (products) mPostrow.products = products
  if (type) mPostrow.type = type

  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      const { postrows } = sellpost
      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (postrow.id == id) {
          postrows[i] = mPostrow
          break
        }
      }

      sellpost.postrows = postrows
      sellpost.save()
    }
  })
}

export const deletePostrow = (message) => {
  const { postrowId: id, sellPostId: sellpostId } = message.postrow
  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      const { postrows } = sellpost
      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (postrow.id == id) {
          postrows.splice(i, 1)
          break
        }
      }

      sellpost.postrows = postrows
      sellpost.save()
    }
  })
}
