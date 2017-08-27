import { get } from '~/config/allString'

const verifyCharacterVietname = (username) => {
    username = username.toUpperCase();
    const VIETNAMESE_DIACRITIC_CHARACTERS = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ";

    var numspace = 0;
    var curdisspace = 0;
    var minspace = 10;
    for (let i = 0; i < username.length; i++) {
        let ok = false;
        if( username[i] == " ") {
            numspace++;
            if(minspace > curdisspace)
                minspace = curdisspace
            curdisspace = 0;
            continue;
        }
        curdisspace++;
        if( /^[A-Za-z]+$/.test(username[i]) ) continue;
        for (let j = 0; j < VIETNAMESE_DIACRITIC_CHARACTERS.length; j++) {
            if(username[i] == VIETNAMESE_DIACRITIC_CHARACTERS[j] ){
                ok = true;
                break;
            }
        }
        if(!ok) return false;
    }
    const isTwoSpace = username.search("  ") != -1;
    if( isTwoSpace || numspace > 5 || minspace < 2) return false;
    return true;
}

const positiveNumber = (value) => {
    if(!value) return false
    for(let i = 0; i< value.length; i++){
        if(value[i] < '0' || '9' < value[i])
            return false
    }
    return true
}

export const checkUserName = (username) => {
    if(!username) return 'error'
    const length = username.length;
    if( length > 45 || length < 5 || (length > 0 && !verifyCharacterVietname(username)) ) return 'error'
    return null
}

export const checkEmail = (email) => {
    if(!email) return 'error'
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if( !ismail ) return 'error'
    return null
}

export const checkBasicPhone = (phone) => {
    if(!phone) return 'error'
    for(let i = 0; i< phone.length; i++){
        if(phone[i]!= '+' || (phone[i] < '0' || '9' < phone[i]))
            return 'error'
    }
    return null
}

export const checkPhone = (phone) => {
    if(!phone) return 'error'
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phone)
    if( !isphone ) return 'error'
    return null
}

export const checkPassword = (password) => {
    if(!password) return 'error'
    const length = password.length;
    if (0 <= length && length < 5 ) return 'error';
    return null
}

export const checkloginId = (loginId) => {
    if(!loginId) return 'error'
    const length = loginId.length;
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginId)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginId)
    if( !ismail && !isphone ) return 'error'
    return null;
}

export const checkAge = (age) => {
    if(!positiveNumber(age)) return 'error'
    if(age > 100) return 'error'
    return null
}

export const FilteringPhoneDefaultVietName = (phone) => {
    let newphone;
    if(phone[0] == '0')
        newphone = '+84' + phone.substring(1);
    else if(phone[0] != '+')
        newphone = '+' + phone;
    else
        newphone = phone;
    return newphone;
}

const Add0toMinus = (minutes) => {
    if(minutes.toString().length == 1)
        return '0'+minutes;
    return minutes
}



export const getTime = (time, language) => {
    const date = new Date(time)
    const seconds = Math.floor(((new Date()).getTime() - time) / 1000);
    if(seconds < 60) return get(language, 'JUST_NOW')
    const mins = Math.floor(((new Date()).getTime() - time) / 60000);
    if(mins < 60) return mins+' '+get(language, 'MINS')
    const hours = Math.floor(((new Date()).getTime() - time) / 3600000);
    if(hours < 24) return hours+' '+get(language, 'HRS')
    const days = Math.floor(((new Date()).getTime() - time) / 86400000);
    if(days == 1 ) return get(language, 'YESTERDAY')+' '+get(language,'AT') + ' ' +
        date.getHours() + ':' + Add0toMinus(date.getMinutes())
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const finallyMonth = (language == 'en') ?
        monthNames[date.getMonth()] :
        ( get(language,'MONTH') + ' ' + (parseInt(date.getMonth()) + 1) )
    return date.getDate() + ' ' + finallyMonth + ' ' + get(language,'AT') + ' ' + date.getHours() + ":" + Add0toMinus(date.getMinutes())
}

export const getLikeContent = (likes, numlike, yourid) => {
    if(!likes) return '';
    let likeContent = '';
    for(let i=0; i< likes.length; i++){
        if( likes[i].id ==  yourid ){
            likeContent = 'You'
            break;
        }
    }
    for(let i=0; i< likes.length; i++){
        if( likes[i].id !=  yourid ){
            if(likeContent != '') likeContent += ', '
            likeContent += likes[i].name
        }
    }
    if(numlike - likes.length > 0 ){
        if(likeContent != '') {
            likeContent += ' and ' + (numlike - likes.length) + ' another people'
        }else{
            likeContent += (numlike - likes.length) + ' people'
        }
    }
    return likeContent;
}

export const getBeLike = (likes, yourid) => {
    if(!likes) return false
    for(let i = 0; i< likes.length; i++)
        if( likes[i].id ==  yourid )
            return true;
    return false;
}

export const getBeFollow = (follows, yourid) => {
    if(!follows) return false
    for(let i = 0; i< follows.length; i++)
        if( follows[i].userid ==  yourid )
            return true;
    return false;
}

export const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000)
    var interval = Math.floor(seconds / 31536000)


    interval = Math.floor(seconds / 86400)
    if (interval > 1) {
        return interval + "d ago"
    }
    interval = Math.floor(seconds / 86400)
    if (interval == 1) {
        return "yesterday at "
    }
    interval = Math.floor(seconds / 3600)
    if (interval > 1) {
        return interval + "h ago"
    }
    interval = Math.floor(seconds / 60)
    if (interval > 1) {
        return interval + "m ago"
    }
    return Math.floor(seconds) + "s ago"
}

export const getSmallString = (str, length) => {
    if(str == undefined) return ""
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,length)
}
