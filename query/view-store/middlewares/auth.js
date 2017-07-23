import { verifyToken } from '../services/StoreService'

const auth = () => {
    return (req, res, next) => {
        const token = req.cookies.token
        console.log('token: ' + token)
        if (!token) {
            req.decoded = { _id: 'Guest' }
            next()
        } else {
            let decoded = verifyToken(token)
            if (decoded) {
                req.decoded = decoded
                next()
            } else {
              req.decoded = { _id: 'Guest' }
              next()
            }
        }
    }
}

export default auth
