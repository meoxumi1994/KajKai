import { BasicUser, Follower, Sellpost } from '../models'

export const addFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '012') { // sellpost
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
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

export const removeFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '012') { // sellpost
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
        store.save(() => {})
      }
    })
  }
}
