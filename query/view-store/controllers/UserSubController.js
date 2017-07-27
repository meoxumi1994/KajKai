import { BasicUser, Store } from '../models'

export const createBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = new BasicUser({ id })

  if (username) basicUser.username = username
  if (avatarUrl) basicUser.avatarUrl = avatarUrl

  basicUser.save(() => {})
}

export const updateBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = {}

  if (avatarUrl) basicUser.avatarUrl = avatarUrl
  if (username) basicUser.username = username

  BasicUser.findOneAndUpdate({ id }, basicUser, () => {})
  Store.find({}, (err, stores) => {
    if (stores) {
      stores.map((store) => {
        let { followers } = store
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
        store.followers = followers
        store.save()
      })
    }
  })
}
