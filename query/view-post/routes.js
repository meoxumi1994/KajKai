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
        middleware: [auth()],
        method: 'getSellpostsHandler'
    }
  },
  '/post/user': {
    get :{
      controller: 'SellpostController',
      middleware: [auth()],
      method: 'getUserSellpostsHandler'
    }
  },
  '/post/user/:id': {
    get: {
      controller: 'SellpostController',
      middleware: [auth()],
      method: 'getUserSellpostsHandler'
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
  '/groupcomment/:type/:id': {
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
  },
  '/imagelist/postrow/:storeid': {
    get: {
      controller: 'PostrowController',
      middleware: [auth()],
      method: 'getPostrowImageListHandler'
    }
  },
  '/imagelist/product/:storeid': {
    get: {
      controller: 'ProductController',
      middleware: [auth()],
      method: 'getProductImageListHandler'
    }
  },
  '/statistics/:storeid': {
    get: {
      controller: 'StatisticsController',
      middleware: [auth()],
      method: 'getStatisticsHandler'
    }
  }
}
