import { BasicUser, Follower, Sellpost } from '../models'

export const addUserFollow = (message) => {
  const { followerId, followeeId } = message.userFollow

  if (followeeId.substr(0, 3) == '012') { // sellpost
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
        let { followingSellposts } = basicUser
        if (!followingSellposts) {
          followingSellposts = []
        }
        followingSellposts.push(followeeId)
        basicUser.followingSellposts = followingSellposts
        basicUser.save(() => {})

        const follower = new Follower({
          userId: basicUser.id,
          username: basicUser.username,
          avatarUrl: basicUser.avatarUrl
        })
        Sellpost.findOne({ id: followeeId }, (err, sellpost) => {
          if (sellpost) {
            let { followers } = sellpost
            if (!followers) {
              followers = []
            }
            followers.push(follower)
            sellpost.followers = followers
            sellpost.numberOfFollow = followers.length
            sellpost.save(() => {})
          }
        })
      }
    })
  }
}

export const removeUserFollow = (message) => {
  const { followerId, followeeId } = message.userFollow

  if (followeeId.substr(0, 3) == '012') { // sellpost
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
        let { followingSellposts } = basicUser
        if (!followingSellposts) {
          followingSellposts = []
        }
        for (let i = 0; i < followingSellposts.length; i++) {
          if (followingSellposts[i] == followeeId) {
            followingSellposts.splice(i, 1)
            break
          }
        }
        basicUser.followingSellposts = followingSellposts
        basicUser.save(() => {})
      }
    })

    Sellpost.findOne({ id: followeeId }, (err, sellpost) => {
      if (sellpost) {
        let { followers } = sellpost
        for (let i = 0; i < followers.length; i++) {
          if (followers[i].userId == followerId) {
            followers.splice(i, 1)
            break
          }
        }
        sellpost.followers = followers
        sellpost.numberOfFollow = followers.length
        sellpost.save(() => {})
      }
    })
  }
}

export const addFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '012') { // sellpost
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
        let { notifySellposts } = basicUser
        if (!notifySellposts) {
          notifySellposts = []
        }
        notifySellposts.push(followeeId)
        basicUser.notifySellposts = notifySellposts
        basicUser.save(() => {})
      }
    })
  }
}

export const removeFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '012') { // sellpost
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
        let { notifySellposts } = basicUser
        for (let i = 0; i < notifySellposts.length; i++) {
          if (notifySellposts[i] == followeeId) {
            notifySellposts.splice(i, 1)
            break
          }
        }
        basicUser.notifySellposts = notifySellposts
        basicUser.save(() => {})
      }
    })
  }
}
