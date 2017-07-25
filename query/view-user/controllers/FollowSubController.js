import { User } from '../models'

export const addFollow = (message) => {
  const { followerId, followeeId } = message.follow

  User.findOne({ id: followerId }, (err, user) => {
    if (user) {
      if (followeeId.substr(0, 3) == '002') { // store
        let { followingStores } = user
        if (!followingStores) {
          followingStores = []
        }
        followingStores.push(followeeId)
        user.followingStores = followingStores
        user.save(() => {})
      } else if (followeeId.substr(0, 3) == '012') { // sellpost
        let { followingSellposts } = user
        if (!followingSellposts) {
          followingSellposts = []
        }
        followingSellposts.push(followeeId)
        user.followingSellposts = followingSellposts
        user.save(() => {})
      }
    }
  })
}

export const removeFollow = (message) => {
  const { followerId, followeeId } = message.follow

  User.findOne({ id: followerId }, (err, user) => {
    if (user) {
      if (followeeId.substr(0, 3) == '002') { // store
        let { followingStores } = user
        for (let i = 0; i < followingStores.length; i++) {
          if (followingStores[i] == followeeId) {
            followingStores.splice(i, 1)
            break
          }
        }
        user.followingStores = followingStores
        user.save(() => {})
      } else if (followeeId.substr(0, 3) == '012') { // sellpost
        let { followingSellposts } = user
        for (let i = 0; i < followingSellposts.length; i++) {
          if (followingSellposts[i] == followeeId) {
            followingSellposts.splice(i, 1)
            break
          }
        }
        user.followingSellposts = followingSellposts
        user.save(() => {})
      }
    }
  })
}
