import uuidv4 from 'uuid/v4'

const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const vietnamseChar = 'aẳẵẫạắằặấầẩậắằặấầẩậàáâãảăẳẵàáâãảăẫạbcdđeẽẹếềểễệẽẹếềểễệèéêẻèéêẻfghiịỉịìíĩìíĩỉjklmnoốồổỗộợớờởỏọõốồổỗỡơộờởòóôõỏọợơớòóôỡpqrstuủũụựứừửưứừửùúưữựụùúũủữvwxyỷỹỵỳỳỷỹỵýýz';
const rootToken =     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcddeeeeeeeeeeeeeeeeeeeeeeefghiiiiiiiiiiijklmnooooooooooooooooooooooooooooooooooopqrstuuuuuuuuuuuuuuuuuuuuuuuvwxyyyyyyyyyyyz';

export const checkPhone = (phone) => {
    return phone !== null && phoneRegrex.test(phone)
};

export const checkEmail = (email) => {
    return email !== null && emailRegrex.test(email)
};

export const getHash = (str) => {
    return md5(str)
};

export const reverseString = (str) => {
    return str.split("").reverse().join("")
};

export const encryptID = (id) => {
    return jwt.sign({id : id}, 'kajkkkk')
};

export const decryptID = (id) => {
    try {
        var decoded = jwt.verify(id, 'kajkkkk');
        return decoded.id
    } catch (err) {
        return null
    }
};

export const getTokenSocketCookie = (str) => {
    if (!str) return str
    var n = str.indexOf('token')
    if (n === -1) return null
    var last = str.indexOf(';')
    if (last === -1) last = str.length
    return str.substr(n + 6, last - n - 6)
};

export const getCurrentTime = () => {
    return (new Date()).getTime()
};

export const getUUID = () => {
    return uuidv4();
};

export const toRoot = (keyword) => {
    let tmp = keyword.toLowerCase().trim();
    let res = '';
    for (let i = 0; i < tmp.length; ++i) {
        let pos = vietnamseChar.indexOf(tmp.charAt(i));
        if (pos === -1) res += tmp.charAt(i);
        else res += rootToken.charAt(pos);
    }
    return res;
};
