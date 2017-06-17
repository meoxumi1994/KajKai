import { User, Address } from '../models'
import jwt from 'jsonwebtoken'
import enums from '../enum'
import mongoose from '../datasource'
import { checkEmail, getCU } from '../utils/utils'
const USER_GLOBAL_ID = '001'

export const getUser = (id, next) => {
    if (id.startsWith(USER_GLOBAL_ID)) {
        id = getUserLocalId(id)
        User.findById(id, function(err, user) {
            if (err) {
                next(null)
            } else {
                next(user)
            }
        })
    } else {
        next(null)
    }
}

export const getUserGlobalId = (id) => {
    return USER_GLOBAL_ID + id
}

export const getUserLocalId = (id) => {
    if (id.length <= 3) return id
    return id.substr(3, id.length)
}

export const getUserTrivivalInfo = (user) => {
    return {
        username: user.userName,
        imageUrl: user.avatarUrl,
        address: user.address,
        phone: user.phone
    }

}

export const getUserBasicInfo = (user) => {
    return { username: user.userName, listUrls: [user.imageUrl],
        phone: user.phone, address: user.address, yearOfBirth: user.yearOfBirth,
        language: user.language, passwordLastUpdatedAt: user.passwordLastUpdatedAt,
        usernameLastUpdatedAt: user.nameLastUpdatedAt,
        yearOfBirthLastUpdateAt: user.yearOfBirthLastUpdateAt,
        addressLastUpdateAt: user.addressLastUpdateAt,
        avatarUrl: user.avatarUrl,
        coverUrl: user.coverUrl,
        id: getUserGlobalId(user._id) }
}

export const getUserBasicStoreInfo = (user) => {
    return { username: user.userName,
        phone: user.phone, address: user.address, yearOfBirth: user.yearOfBirth,
        language: user.language,
        avatarUrl: user.avatarUrl,
        coverUrl: user.coverUrl,
        id: getUserGlobalId(user._id) }
}

export const getListUser = (ids, next) => {
    var list = []
    for (var i = 0; i < ids.length; ++i) {
        list.push(mongoose.Types.ObjectId(getUserLocalId(ids[i])))
    }
    User.find({'_id': {$in: list}}, function(err, docs){
        next(docs)
    })
}

export const getChatUserInfo = (user) => {
    return { id: getUserGlobalId(user._id), avatarUrl: user.avatarUrl, name: user.userName}
}

export const getChatUserListInfo = (userList) => {
    var result = []
    for (var i = 0; i < userList.length; ++i) {
        result.push(getChatUserInfo(userList[i]))
    }
    return result
}

export const getUserFromEmail = (_email, next) => {
    User.findOne({email: _email}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
}

export const getUserFromPhone = (_phone, next) => {
    User.findOne({phone: _phone}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
}

export const getUserFromFacebookId = (facebookId, next) => {
    User.findOne({socialNetworkType: enums.FACEBOOK, socialNetworkId: facebookId}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
}

export const getUserToken = (id) => {
    return jwt.sign({_id: getUserGlobalId(id)}, 'secret', { expiresIn: 60 * 60 * 60 });
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}

export const getUserFromToken = (token, next) => {
    const decoded = verifyToken(token)
    if (!decoded) next(null)
    else {
        getUser(decoded._id, function (user) {
            next(user)
        })
    }
}

export const updateUserPhone = (id, phone, next) => {
    getUser(id, function(user){
        if (user) {
            user.phone = phone
            user.save(function(err){
                if (err) {
                    next('failed')
                } else {
                    next('success')
                }
            })
        } else {
            next('failed')
        }
    })
}

export const verifyCharacterVietname = (username) => {
    username = username.toUpperCase();
    const VIETNAMESE_DIACRITIC_CHARACTERS = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ";

    var numspace = 0;
    var curdisspace = 0;
    var minspace = 10;
    for (let i = 0; i < username.length; i++) {
        let ok = false;
        if( username[i] === " ") {
            numspace++;
            if(minspace > curdisspace)
                minspace = curdisspace
            curdisspace = 0;
            continue;
        }
        curdisspace++;
        if( /^[A-Za-z]+$/.test(username[i]) ) continue;
        for (let j = 0; j < VIETNAMESE_DIACRITIC_CHARACTERS.length; j++) {
            if(username[i] === VIETNAMESE_DIACRITIC_CHARACTERS[j] ){
                ok = true;
                break;
            }
        }
        if(!ok) return false;
    }
    const isTwoSpace = username.search("  ") !== -1;
    return !(isTwoSpace || numspace > 5 || minspace < 2)
}


export const validateName = (username) => {
    const length = username.length;
    return (length >= 5 && length <= 45 && verifyCharacterVietname(username))
}

export const validateLanguage = (language) => {
    return (language === enums.Language.VIETNAM || language === enums.Language.ENGLISH)
}

export const validateSex = (sex) =>{
    return (sex === enums.Sex.MALE || sex === enums.Sex.FEMALE)
}

export const updateVerifyUser = (id, next) => {
    getUser(id, (user) => {
        if (user) {
            user.verified = 1
            user.save(() => {
                next(true)
            })
        } else {
            next(null)
        }
    })
}

export const validateYearOfBirth = (year) => {
    return year >= 1900 && year <= (new Date()).getYear() + 1900
}

export const createUser = (email, userName, password, verified, yearOfBirth, socialNetworkType, socialNetworkId, next) => {
    if (userName === null || !validateName(userName)) next(null)
    if (email === null || !checkEmail(email)) {
        if (!socialNetworkType) next(null)
    }
    if (yearOfBirth !== null && !validateYearOfBirth(yearOfBirth)) next(null)
    const user = new User({email: email, userName: userName, password: password, verified: verified, yearOfBirth: yearOfBirth, socialNetworkType: socialNetworkType,
                socialNetworkId: socialNetworkId})
    user.save(function (err) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
}

export const updateUserInfo = (userId, info, next) => {
    getUser(userId, (user) => {
        if (!user) {
            next({error: 'user error'})
            return
        }
        var updateName = false
        var updateAddress = false
        var updateYOB = false
        if (info.username) {
            if (validateName(info.username)) {
                user.userName = info.username
                updateName = true
            } else {
                next({error: 'name error'})
                return
            }
        }
        if (info.avatarUrl) {
            user.avatarUrl = info.avatarUrl
            if (!user.imageUrl) {
                user.imageUrl = [info.avatarUrl]
            } else {
                if (user.imageUrl.indexOf(info.avatarUrl) === -1) {
                    user.imageUrl.push(user.avatarUrl)
                }
            }
        }
        if (info.coverUrl) {
            user.coverUrl = info.coverUrl
            if (!user.imageUrl) {
                user.imageUrl = [info.coverUrl]
            } else {
                if (user.imageUrl.indexOf(info.coverUrl) === -1) {
                    user.imageUrl.push(info.coverUrl)
                }
            }
        }
        if (info.address) { // TO DO
            user.address = new Address(info.address)
            updateAddress = true
        }
        if (info.language) {
            if (validateLanguage(info.language)) {
                user.language = info.language
            } else {
                next({error: 'language error'})
                return
            }
        }
        if (info.sex) {
            if (validateSex(info.sex)) { //
                user.sex = info.sex
            } else {
                next({error: 'sex error'})
                return
            }
        }

        if (info.yearOfBirth) {
            try{
                const year = parseInt(info.yearOfBirth)
                if (year >= 1900 && year <= (new Date()).getYear() + 1900) {
                    user.yearOfBirth = year
                    updateYOB = true
                } else {
                    next({error: 'year error'})
                    return
                }
            } catch (err) {
                next({error: 'year error'})
            }
        }

        if (updateName) {
            user.nameLastUpdatedAt = new Date()
        }
        if (updateYOB) {
            user.yearOfBirthLastUpdateAt = new Date()
        }
        if (updateAddress) {
            user.addressLastUpdateAt = new Date()
        }

        user.save((err) => {
            if (err) {
                next({status: 'update err'})
            } else {
                next({status: 'success'})
            }
        })
    })
}