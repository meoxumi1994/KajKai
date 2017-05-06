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

export const checkUserName = (username) => {
    const length = username.length;
    if( length > 45 || length < 5 || (length > 0 && !verifyCharacterVietname(username)) ) return 'error'
    return null
}

export const checkEmail = (email) => {
    const length = loginID.length;
    // const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginID)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if( !ismail ) return 'error'
    return null
}

export const checkPassword = (password) => {
    const length = password.length;
    if (0 <= length && length < 5 ) return 'error';
    return null
}
