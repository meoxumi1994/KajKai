import redis from 'redis'
import config from '../config/pubSubConfig'
import { authoriseToken } from '../controllers/StorePubController'

const auth = () => {
    return (req, res, next) => {

        const token = req.cookies.token
        console.log('token: ' + token)
        if (!token) {
            res.json({ authorization: "FAILED" })
        } else {
            authoriseToken(token, (user) => {
                if (user) {
                    res.user = user
                    next()
                } else {
                    res.json({ authorization: "FAILED" })
                }
            })
        }
    }
}

export default auth
