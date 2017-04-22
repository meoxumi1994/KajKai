import auth from './common/middlewares/auth'
// import cors from 'cors'

export default {
  // '/demo': {
  //   get: {
  //     controller: 'DemoController',
  //     middleware: [auth()],
  //     method: 'getDemo'
  //   },
  //   post: {
  //     controller: 'DemoController',
  //     method: 'postDemo'
  //   }
  // },
  '/api': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'suckthisshit'
    }
  }
}
