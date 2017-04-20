import chatApp from '../../../client/reducers/demo'
import ChatAppContainer from '../../../client/containers/demo/ChatAppContainer'

import { serverSideRenderingDemo } from '../helper'

import { validateTokenDemo } from '../../services/DemoService'

const auth = () => {
  return (req, res, next) => {

    if(validateTokenDemo(req.cookies.token)){
      next()
    }else{
      // Send the rendered page back to the client
      res.send(serverSideRenderingDemo({login: { type: 'NOT_LOGGED_IN' }}, chatApp, ChatAppContainer))
    }
  }
}

export default auth
