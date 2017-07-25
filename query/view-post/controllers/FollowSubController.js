import { Store, BasicUser, Follower } from '../models'

export const addFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '002') { // store
    BasicUser.findOne({ id: followerId }, (err, basicUser) => {
      if (basicUser) {
        const follower = new Follower({
          userId: basicUser.id,
          username: basicUser.username,
          avatarUrl: basicUser.avatarUrl
        })

        Store.findOne({ id: followeeId }, (err, store) => {
          if (store) {
            let { followers } = store
            if (!followers) {
              followers = []
            }
            followers.push(follower)
            store.followers = followers
            store.numberOfFollow = followers.length
            store.save(() => {})
          }
        })
      }
    })
  } else if (followeeId.substr(0, 3) == '012') { //sellpost
    
  }
}

export const removeFollow = (message) => {
  const { followerId, followeeId } = message.follow

  if (followeeId.substr(0, 3) == '002') { // store
    Store.findOne({ id: followeeId }, (err, store) => {
      if (store) {
        let { followers } = store
        for (let i = 0; i < followers.length; i++) {
          if (followers[i].userId == followerId) {
            followers.splice(i, 1)
            break
          }
        }
        store.followers = followers
        store.numberOfFollow = followers.length
        store.save(() => {})
      }
    })
  }
}
