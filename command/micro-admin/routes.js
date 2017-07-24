import authAdmin from './middlewares/authAdmin'

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
    }
}
