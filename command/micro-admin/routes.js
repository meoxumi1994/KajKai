import auth from './middlewares/auth'
import phoneCheck from './middlewares/phoneChecking'

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
}
