import md5 from 'md5'
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