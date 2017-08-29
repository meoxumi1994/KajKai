import { Sellpost, Minorpost, Comment, Reply, BasicUser, BasicStore, Match } from '../models'
import { OrderStatus } from '../enum'

export const createComment = (message) => {
  const { fCommentId: id, posterId, sellPostId: sellpostId, minorPostId: minorpostId, order, time, content, match } = message.fComment

  const comment = new Comment({
    id,
    commenterId: posterId
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

  if (match) {
    let tags = []
    match.map((item) => {
      tags.push(
        new Match({
          id: item.id,
          name: item.name,
          link: item.link
        })
      )
    })
    comment.match = tags
  }

  comment.time = Date.now()
  comment.status = OrderStatus.NEW

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    BasicUser.findOne({ id: posterId }, (err, basicUser) => {
      if (basicUser) {
        const reply = new Reply({
          commentId: id,
          type: 'user',
          id,
          userId: posterId,
          username: basicUser.username,
          avatarUrl: basicUser.avatarUrl,
          content,
          time : Date.now(),
          numberOfLike: 0
        })

        if (basicUser.phone) comment.phone = basicUser.phone
        if (basicUser.address) comment.address = basicUser.address
        if (basicUser.latitude) comment.latitude = basicUser.latitude
        if (basicUser.longitude) comment.longitude = basicUser.longitude

        if (comment.match) {
          reply.match = comment.match
        }
        resolve(reply)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: posterId }, (err, basicStore) => {
      if (basicStore) {
        const reply = new Reply({
          commentId: id,
          type: 'store',
          urlName: basicStore.urlName,
          id,
          userId: posterId,
          username: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl,
          content,
          time: Date.now(),
          numberOfLike: 0
        })
        if (comment.match) {
          reply.match = comment.match
        }
        resolve(reply)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((replies) => {
    const reply = replies[0] ? replies[0] : replies[1]

    if (!reply) {
      return
    }

    comment.replies = [reply]

    if (sellpostId) {
      Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
        if (sellpost) {
          comment.storeId = sellpost.storeId

          BasicUser.findOne({ id: })
          comment.save(() => {})

          let { comments } = sellpost

          if (!comments) {
            comments = []
          }
          comments.push(comment)
          sellpost.comments = comments
          sellpost.numberOfComment = comments.length

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
  })
}

export const updateComment = (message) => {
  const { fCommentId: id, status } = message.fComment
  Comment.findOne({ id }, (err, comment) => {
    if (comment) {
      comment.status = status
      comment.save(() => {})
      Sellpost.findOne({ id: comment.sellpostId }, (err, sellpost) => {
        if (sellpost) {
          let { comments } = sellpost
          if (!comments) {
            comments = []
          }
          for (let i = 0; i < comments.length; i++) {
            if (comments[i].id == id) {
              comments[i].status = status
              break
            }
          }
          sellpost.comments = comments
          sellpost.save(() => {})
        }
      })
    }
  })
}
