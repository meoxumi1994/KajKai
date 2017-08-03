import auth from './middlewares/auth'

export default {
  '/user': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserHandler'
    }
  },
  '/user/:id': {
    get: {
        controller: 'UserController',
        middleware: [auth()],
        method: 'getUserHandler'
    },
  },
  // '/privacy/user': {
  //   get: {
  //     controller: 'UserController',
  //     middleware: [auth()],
  //     method: 'getUserPrivacyHandler'
  //   }
  // },
  // '/privacy/user/:id': {
  //   get: {
  //     controller: 'UserController',
  //     middleware: [auth()],
  //     method: 'getUserPrivacyHandler'
  //   }
  // },
  '/imagelist/user': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserImageListHandler'
    }
  },
  '/imagelist/user/:id': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserImageListHandler'
    }
  },
  '/notification': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getNotificationsHandler'
    },
    put: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'updateNotificationHandler'
    }
  },
  '/interest': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getInterestsHandler'
    }
  }
}
