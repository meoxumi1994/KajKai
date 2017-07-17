import auth from './middlewares/auth'

export default {
  '/sellpost/:id': {
    get: {
        controller: 'SellpostController',
        middleware: [auth()],
        method: 'getSellpostHandler'
    }
  },
  '/sellpost/store/:id': {
    get: {
        controller: 'SellpostController',
        // middleware: [auth()],
        method: 'getSellpostsHandler'
    }
  },
  '/postrows/:sellpostid': {
    get: {
      controller: 'PostrowController',
      middleware: [auth()],
      method: 'getPostrowsHandler'
    }
  },
  '/minorpost/store/:storeid': {
    get: {
      controller: 'MinorpostController',
      middleware: [auth()],
      method: 'getMinorpostsHandler'
    }
  },
  '/content/:minorpostid': {
    get: {
      controller: 'MinorpostController',
      middleware: [auth()],
      method: 'getMinorpostContentHandler'
    }
  },
  '/groupcomment/:posttype/:id': {
    get: {
      controller: 'CommentController',
      middleware: [auth()],
      method: 'getCommentsHandler'
    }
  },
  '/leadercomment/:id': {
    get: {
      controller: 'ReplyController',
      middleware: [auth()],
      method: 'getRepliesHandler'
    }
  }
}
