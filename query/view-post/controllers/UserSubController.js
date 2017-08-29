import { BasicUser, Sellpost, Comment } from '../models'

export const createBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = new BasicUser({ id })

  if (username) basicUser.username = username
  if (avatarUrl) basicUser.avatarUrl = avatarUrl

  basicUser.save(() => {})
}

export const updateBasicUser = (message) => {
  const { id, username, avatarUrl, address, phone, position } = message.user
  const basicUser = {}

  if (avatarUrl) basicUser.avatarUrl = avatarUrl
  if (username) basicUser.username = username
  if (address) basicUser.address = address
  if (position) {
    let { lng, lat } = position
    if (lng) {
      basicUser.longitude = lng
    }
    if (lat) {
      basicUser.latitude = lat
    }
  }
  if (phone) basicUser.phone = phone

  BasicUser.findOneAndUpdate({ id }, basicUser, () => {})
  Comment.find({}, (err, comments) => {
    if (comments) {
      comments.map((comment) => {
        if (comment.commenterId == id) {
          if (address) comment.address = address
          if (position) {
            let { lng, lat } = position
            if (lng) {
              comment.longitude = lng
            }
            if (lat) {
              comment.latitude = lat
            }
          }
          if (phone) comment.phone = phone
        }
        let { replies } = comment
        if (!replies) {
          replies = []
        }
        for (let i = 0; i < replies.length; i++) {
          let reply = replies[i]
          if (reply.userId == id) {
            reply.username = username ? username : reply.username
            reply.avatarUrl = avatarUrl ? avatarUrl : reply.avatarUrl
          }
          let { likers } = reply
          if (!likers) {
            likers = []
          }
          for (let k = 0; k < likers.length; k++) {
            let liker = likers[k]
            if (liker.userId == id) {
              liker.username = username ? username : liker.username
              liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
            }
            likers[k] = liker
          }
          reply.likers = likers
          replies[i] = reply
        }
        comment.replies = replies
        comment.save(() => {})
      })
    }
  })
  Sellpost.find({}, (err, sellposts) => {
    if (sellposts) {
      sellposts.map((sellpost) => {
        let { likers } = sellpost
        if (!likers) {
          likers = []
        }
        for (let i = 0; i < likers.length; i++) {
          let liker = likers[i]
          if (liker.userId == id) {
            liker.username = username ? username : liker.username
            liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
          }
          likers[i] = liker
        }
        sellpost.likers = likers
        let { followers } = sellpost
        if (!followers) {
          followers = []
        }
        for (let i = 0; i < followers.length; i++) {
          let follower = followers[i]
          if (follower.userId == id) {
            follower.username = username ? username : follower.username
            follower.avatarUrl = avatarUrl ? avatarUrl : follower.avatarUrl
          }
          followers[i] = follower
        }
        sellpost.followers = followers
        let { comments } = sellpost
        if (!comments) {
          comments = []
        }
        for (let h = 0; h < comments.length; h++) {
          let comment = comments[h]
          if (comment.commenterId == id) {
            if (address) comment.address = address
            if (position) {
              let { lng, lat } = position
              if (lng) {
                comment.longitude = lng
              }
              if (lat) {
                comment.latitude = lat
              }
            }
            if (phone) comment.phone = phone
          }
          let { replies } = comment
          if (!replies) {
            replies = []
          }
          for (let i = 0; i < replies.length; i++) {
            let reply = replies[i]
            if (reply.userId == id) {
              reply.username = username ? username : reply.username
              reply.avatarUrl = avatarUrl ? avatarUrl : reply.avatarUrl
            }
            let { likers } = reply
            if (!likers) {
              likers = []
            }
            for (let k = 0; k < likers.length; k++) {
              let liker = likers[k]
              if (liker.userId == id) {
                liker.username = username ? username : liker.username
                liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
              }
              likers[k] = liker
            }
            reply.likers = likers
            replies[i] = reply
          }
          comment.replies = replies
          comments[h] = comment
        }
        sellpost.comments = comments
        sellpost.save(() => {})
      })
    }
  })
}
