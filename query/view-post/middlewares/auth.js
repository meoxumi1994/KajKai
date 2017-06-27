import { verifyToken } from '../services/SellpostService'

const auth = () => {
    return (req, res, next) => {
        const token = req.cookies.token
        console.log('token: ' + token)
        if (!token) {
            res.json({ authorization: "FAILED" })
        } else {
            let decoded = verifyToken(token)
            if (decoded) {
                req.decoded = decoded
                next()
            } else {
                res.send({
                    authorization: "FAILED"
                })
            }
        }
    }
}

export default auth
