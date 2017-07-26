import authAdmin from './middlewares/authAdmin'
import auth from './middlewares/auth'

export default {
    '/loginadmin': {
      post: {
        controller: 'AdminController',
        method: 'loginAdmin'
      }
    },
    '/users': {
      get: {
        controller: 'AdminController',
        middleware: [authAdmin()],
        method: 'getUsersHandler'
      }
    },
    '/feedbacks': {
      get: {
        controller: 'AdminController',
        middleware: [authAdmin()],
        method: 'getFeedbacksHandler'
      }
    },
    '/ban': {
      post: {
        controller: 'AdminController',
        middleware: [authAdmin()],
        method: 'banUserHandler'
      }
    },
    '/feedback': {
      post: {
        controller: 'AdminController',
        middleware: [auth()],
        method: 'createFeedbackHandler'
      },
      get: {
        controller: 'AdminController',
        middleware: [authAdmin()],
        method: 'getFeedbackHandler'
      }
    }
}
