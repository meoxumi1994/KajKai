import { Admin } from '../models'
import jwt from 'jsonwebtoken'

export const verifyAdminToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'adminsecret');
        return decoded;
    } catch(err) {
        return null;
    }
}
