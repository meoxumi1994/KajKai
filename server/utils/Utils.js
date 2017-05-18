import md5 from 'md5'
import jwt from 'jsonwebtoken'
const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/

export const checkPhone = (phone) => {
    return phoneRegrex.test(phone)
}

export const getHash = (str) => {
    return md5(str)
}

export const reverseString = (str) => {
    return str.split("").reverse().join("")
}

export const encryptID = (id) => {
    return jwt.sign({id : id}, 'kajkkkk')
}

export const decryptID = (id) => {
    try {
        var decoded = jwt.verify(id, 'kajkkkk');
        return decoded.id
    } catch (err) {
        return null
    }
}
