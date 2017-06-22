import auth from './middlewares/auth'

export default {
  '/chatlist': {
    get: {
        controller: 'UserChatController',
        middleware: [auth()],
        method: 'getUserChatsHandler'
    }
  }
}
