import { Sellpost, Minorpost, Comment, Reply, BasicUser, BasicStore } from '../models'

export const createComment = (message) => {
  const { fCommentId: id, posterId: userId, sellPostId: sellpostId, minorPostId: minorpostId, order, time, content } = message.fComment

  const comment = new Comment({
    id
  })

  if (sellpostId) comment.sellpostId = sellpostId
  if (minorpostId) comment.minorpostId = minorpostId
  if (order) comment.order = order.map((product) => ({
    id: product.id,
    content: product.content,
    imageUrl: product.imageUrl,
    list: product.list,
    numberOfOrder: product.num
  }))
  if (time) comment.time = time

  if(userId.substr(0, 3) == '001') {
    BasicUser.findOne({ id: userId }, (err, basicUser) => {
      if (basicUser) {
        const reply = new Reply({
          commentId: id,
          type: 'user',
          id,
          userId,
          username: basicUser.username,
          avatarUrl: basicUser.avatarUrl,
          content,
          time,
          numberOfLike: 0
        })

        comment.replies = []
        comment.replies.push(reply)
        comment.save(() => {})

        if (sellpostId) {
          Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
            if (sellpost) {
              let { comments } = sellpost

              if (!comments) {
                comments = []
              }
              comments.push(comment)
              sellpost.numberOfComment = comments.length
              sellpost.comments = comments

              if (order) {
                const { postrows } = sellpost
                for (let i = 0; i < postrows.length; i++) {
                  let { products } = postrows[i]
                  if (products) {
                    for (let k = 0; k < products.length; k++) {
                      let product = products[k]

                      order.map((orderedProduct) => {
                        if (orderedProduct.id == product.id) {
                          if (product.numberOfOrder) {
                            product.numberOfOrder += orderedProduct.numberOfOrder
                          } else {
                            product.numberOfOrder = orderedProduct.numberOfOrder
                          }
                        }
                      })
                      products[k] = product
                    }
                    postrows[i].products = products
                  }
                }

                sellpost.postrows = postrows
              }
              sellpost.save(() => {})
            }
          })
        } else {
          Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
            if (minorpost) {
              let { comments } = minorpost

              if (!comments) {
                comments = []
              }
              comments.push(comment)
              minorpost.numberOfComment = comments.length
              minorpost.comments = comments
              minorpost.save(() => {})
            }
          })
        }
      }
    })
  } else {
    BasicStore.findOne({ id: userId }, (err, basicStore) => {
      if (basicStore) {
        const reply = new Reply({
          commentId: id,
          type: 'store',
          urlname: basicStore.urlName,
          id,
          userId,
          username: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl,
          content,
          time,
          numberOfLike: 0
        })

        comment.replies = []
        comment.replies.push(reply)
        comment.save(() => {})

        if (sellpostId) {
          Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
            if (sellpost) {
              let { comments } = sellpost

              if (!comments) {
                comments = []
              }
              comments.push(comment)
              sellpost.numberOfComment = comments.length
              sellpost.comments = comments

              if (order) {
                const { postrows } = sellpost
                for (let i = 0; i < postrows.length; i++) {
                  let { products } = postrows[i]
                  if (products) {
                    for (let k = 0; k < products.length; k++) {
                      let product = products[k]

                      order.map((orderedProduct) => {
                        if (orderedProduct.id == product.id) {
                          if (product.numberOfOrder) {
                            product.numberOfOrder += orderedProduct.numberOfOrder
                          } else {
                            product.numberOfOrder = orderedProduct.numberOfOrder
                          }
                        }
                      })
                      products[k] = product
                    }
                    postrows[i].products = products
                  }
                }

                sellpost.postrows = postrows
              }
              sellpost.save(() => {})
            }
          })
        } else {
          Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
            if (minorpost) {
              let { comments } = minorpost

              if (!comments) {
                comments = []
              }
              comments.push(comment)
              minorpost.numberOfComment = comments.length
              minorpost.comments = comments
              minorpost.save(() => {})
            }
          })
        }
      }
    })
  }


}
