import { authoriseToken } from '../controllers/NotificationPubController'

const auth = () => {
    return (req, res, next) => {
        const token = req.cookies.token;
        console.log('token: ' + token);
        if (!token) {
            res.json({ authorization: "FAILED" })
        } else {
            authoriseToken(token, (user) => {
                if (user) {
                    req.user = user;
                    next()
                } else {
                    res.json({ authorization: "FAILED" })
                }
            })
        }
    }
};

export default auth
