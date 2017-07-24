import { verifyAdminToken } from '../services/AdminService'

const authAdmin = () => {
    return (req, res, next) => {
        const token = req.cookies.token;
        console.log('token: ' + token);
        if (!token) {
            res.json({ authorization: "FAILED" });
        } else {
            let decoded = verifyAdminToken(token);
            if (decoded) {
                req.decoded = decoded;
                next();
            } else {
              res.json({ authorization: "FAILED" });
            }
        }
    }
}

export default authAdmin
