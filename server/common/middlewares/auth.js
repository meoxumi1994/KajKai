// import chatApp from '../../../client/reducers/demo'
// import ChatAppContainer from '../../../client/containers/demo/ChatAppContainer'

// import { serverSideRenderingDemo } from '../helper'

// import { validateTokenDemo } from '../../services/DemoService'
// var User = require('../../services/UserService.js')
import { verifyToken } from '../../services/UserService'

const auth = () => {

  	return (req, res, next) => {
  		console.log("a hihi");
  		// console.log("token " + req.cookies.token);
  		// console.log("uehfew " + req.cookie.token);
  		// console.log("a hia e " + req.cookies);
  		// if (req.cookies.token) {
  		// 	console.log('user ' + user)
  		// }
      if (req.cookies && req.cookies.token) {
          console.log(req.cookies.token);
      }
    	if (verifyToken(req.cookies.token)) {
          console.log('success');
    		  next()
    	} else {
    		
    		  res.send({
    			 authorization: "FAILED"
    		  })
    	}
  	}
}

export default auth
