import { verifyAdminToken } from '../services/AdminService'

const authAdmin = () => {
    return (req, res, next) => {
        const token = req.cookies.token
        console.log('token: ' + token)
        if (!token) {
            req.decoded = { _id: 'Guest' }
            next()
        } else {
            let decoded = verifyAdminToken(token)
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

export default authAdmin
