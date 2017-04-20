import chatApp from '../../client/reducers/demo'
import ChatAppContainer from '../../client/containers/demo/ChatAppContainer'

import { getPath, serverSideRenderingDemo } from '../common/helper'
import { login, generateTokenDemo } from '../services/DemoService'

const getAbsolutePath = getPath(__dirname)

export const getDemo = () => {
  return (req, res) => {
    // Send the rendered page back to the client
    res.send(serverSideRenderingDemo({login: { type: 'LOG_IN_SUCCESS' }}, chatApp, ChatAppContainer))
  }
}

export const postDemo = () => {
  return (req, res) => {

    let {username, password} = req.body
    
    if (login(username, password)) {

      res.cookie('token', generateTokenDemo(username), { maxAge: 10000})

      setTimeout(() => {
        res.send({
          type: 'LOG_IN_SUCCESS'
        })
      }, 1000)

    } else {

      setTimeout(() => {
        res.send({
          type: 'LOG_IN_FAILURE'
        })
      }, 1000)
    }
  }
}
