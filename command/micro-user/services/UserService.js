import { User, Image } from '../models'
import jwt from 'jsonwebtoken'
import mongoose from '../datasource'
import { checkEmail, generateRandomPassword } from '../utils/utils'
import { SocialType, Language, Sex } from '../enum'
import { sendResetPasswordEmail } from '../services/EmailService'
const USER_GLOBAL_ID = '001';

export const getUser = (id, next) => {
    if (id.startsWith(USER_GLOBAL_ID)) {
        id = getUserLocalId(id);
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
};

export const getUserGlobalId = (id) => {
    return USER_GLOBAL_ID + id
};

export const getUserLocalId = (id) => {
    if (id.length <= 3) return id;
    return id.substr(3, id.length)
};

export const getUserTrivivalInfo = (user) => {
    return {
        username: user.userName,
        imageUrl: user.avatarUrl,
        address: user.address,
        phone: user.phone
    }
};

export const getUserBasicInfo = (user) => {
    return {
        username: user.userName,
        email: user.email,
        avatarUrl: user.avatarUrl,
        coverUrl: user.coverUrl,
        address: user.address,
        phone: user.phone,
        language: user.language === Language.ENGLISH ? 'en' : 'vi',
        sex: user.sex,
        yearOfBirth: user.yearOfBirth,
        lastUpdate: {
            username: user.nameLastUpdatedAt,
            phone: user.phoneLastUpdateAt,
            address: user.addressLastUpdateAt,
        },
        imageUrls: user.imageUrl,
        position: {
            lng: user.longitude,
            lat: user.latitude
        },
        socialType: user.socialNetworkType,
        // blacklist: [{
        //     id:,
        //     type: 'userid|storeid|mesid',
        //     name: ,
        // }],
        id: getUserGlobalId(user._id),
        currentId: user.currentId
    }
};

export const getUserBasicStoreInfo = (user) => {
    return { username: user.userName,
        phone: user.phone, address: user.address, yearOfBirth: user.yearOfBirth,
        language: user.language,
        avatarUrl: user.avatarUrl,
        coverUrl: user.coverUrl,
        id: getUserGlobalId(user._id),
        longitude: user.longitude,
        latitude: user.latitude,
        socialType: user.socialNetworkType,
        currentId: user.currentId
    }
};

export const getListUser = (ids, next) => {
    let list = [];
    for (let i = 0; i < ids.length; ++i) {
        list.push(mongoose.Types.ObjectId(getUserLocalId(ids[i])))
    }
    User.find({'_id': {$in: list}}, function(err, docs){
        next(docs)
    })
};

export const getListUserBasicInfo = (userList) => {
    let result = [];
    for (let i = 0; i < userList.length; ++i) {
        result.push(getUserBasicInfo(userList[i]));
    }
    return result;
};

export const getChatUserInfo = (user) => {
    return { id: getUserGlobalId(user._id), avatarUrl: user.avatarUrl, name: user.userName}
};

export const getChatUserListInfo = (userList) => {
    let result = [];
    for (let i = 0; i < userList.length; ++i) {
        result.push(getChatUserInfo(userList[i]))
    }
    return result
};

export const getUserFromEmail = (_email, next) => {
    User.findOne({email: _email}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
};

export const getUserFromPhone = (_phone, next) => {
    User.findOne({phone: _phone}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
};

export const getUserFromFacebookId = (facebookId, next) => {
    User.findOne({socialNetworkType: SocialType.FACEBOOK, socialNetworkId: facebookId}, function (err, user) {
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
};

export const getUserToken = (id) => {
    let curId = id.toString();
    console.log(id + ' ' + curId);
    if (!curId.startsWith(USER_GLOBAL_ID)) curId = getUserGlobalId(curId);
    console.log(id + ' ' + curId);
    return jwt.sign({_id: curId}, 'secret', { expiresIn: 60 * 60 * 60 });
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
};

export const getUserFromToken = (token, next) => {
    const decoded = verifyToken(token);
    if (!decoded) next(null);
    else {
        getUser(decoded._id, function (user) {
            next(user)
        })
    }
};

export const getPasswordToken = (id, password) => {
    let curId = id.toString();
    if (!curId.startsWith(USER_GLOBAL_ID)) curId = getUserGlobalId(curId);
    return jwt.sign({_id: curId, password: password}, 'aiehiahweg', {expiresIn: 24 * 60 * 60});
};

export const verifyPasswordToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'aiehiahweg');
        return decoded;
    } catch (err) {
        return null;
    }
};

export const updateUserPhone = (id, phone, next) => {
    getUser(id, function(user){
        if (user) {
            user.phone = phone;
            user.phoneLastUpdateAt = new Date();
            user.save((err) => {
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
};

export const verifyCharacterVietname = (username) => {
    username = username.toUpperCase();
    const VIETNAMESE_DIACRITIC_CHARACTERS = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ";

    let numspace = 0;
    let curdisspace = 0;
    let minspace = 10;
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
};


export const validateName = (username) => {
    const length = username.length;
    return (length >= 5 && length <= 45 && verifyCharacterVietname(username))
};

export const validateLanguage = (language) => {
    return (language === Language.VIETNAM || language === Language.ENGLISH)
};

export const validateSex = (sex) =>{
    return (sex === Sex.MALE || sex === Sex.FEMALE)
};

export const updateVerifyUser = (id, next) => {
    getUser(id, (user) => {
        if (user) {
            user.verified = 1;
            user.save(() => {
                next(true)
            })
        } else {
            next(null)
        }
    })
};

export const validateYearOfBirth = (year) => {
    return year >= 1900 && year <= (new Date()).getYear() + 1900
};

export const createUser = (email, userName, password, verified, yearOfBirth, socialNetworkType, socialNetworkId, avatarUrl, next) => {
    if (userName === null) { // || !validateName(userName)) {
        next(null);
        return;
    }
    if (email === null || !checkEmail(email)) {
        if (!socialNetworkType) {
            next(null);
            return;
        }
    }
    if (yearOfBirth !== null) {
        next(null);
        return;
    }
    let imageUrl = [];
    if (avatarUrl) {
        let img = new Image({url: avatarUrl, time: (new Date()).getTime()});
        imageUrl = [img];
    }
    const user = new User({email: email.toLowerCase(), userName: userName, password: password, verified: verified, yearOfBirth: yearOfBirth, socialNetworkType: socialNetworkType,
                socialNetworkId: socialNetworkId, avatarUrl: avatarUrl, imageUrl: imageUrl});
    user.save((err) => {
        console.log('NEW USER CREATED: ' + JSON.stringify(user));
        if (err) {
            next(null)
        } else {
            next(user)
        }
    })
};

export const updateUserInfo = (userId, info, next) => {
    getUser(userId, (user) => {
        if (!user) {
            next('user err', null);
            return
        }
        let updateName = false;
        let updateAddress = false;
        let updateYOB = false;
        if (info.username) {
            if (validateName(info.username)) {
                user.userName = info.username;
                updateName = true
            } else {
                next('name error', null);
                return
            }
        }
        if (info.avatarUrl) {
            user.avatarUrl = info.avatarUrl;
            let found = -1;
            for (let i = 0; i < user.imageUrl.length; ++i) {
                if (user.imageUrl[i].url === info.avatarUrl) {
                    found = i;
                    break;
                }
            }
            if (found === -1) {
                user.imageUrl.push(new Image({url: info.avatarUrl, time: (new Date()).getTime()}));
            }
        }
        if (info.coverUrl) {
            user.coverUrl = info.coverUrl;
            let found = -1;
            for (let i = 0; i < user.imageUrl.length; ++i) {
                if (user.imageUrl[i].url === info.coverUrl) {
                    found = i;
                    break;
                }
            }
            if (found === -1) {
                user.imageUrl.push(new Image({url: info.coverUrl, time: (new Date()).getTime()}));
            }
        }
        if (info.address) { // TO DO
            // user.address = new Address(info.address);
            user.address = info.address;
            updateAddress = true
        }
        if (info.language) {
            if (validateLanguage(info.language)) {
                user.language = info.language
            } else {
                next('language error', null);
                return
            }
        }
        if (info.sex) {
            if (validateSex(info.sex)) { //
                user.sex = info.sex
            } else {
                next('sex error', null);
                return
            }
        }

        if (info.yearOfBirth) {
            try{
                const year = parseInt(info.yearOfBirth);
                user.yearOfBirth = year;
                // if (year >= 1900 && year <= (new Date()).getYear() + 1900) {
                //     user.yearOfBirth = year;
                //     updateYOB = true
                // } else {
                //     next('year error', null);
                //     return
                // }
            } catch (err) {
                next('year error', null)
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

        if (info.position) {
            if (info.position.lng) user.longitude = info.position.lng;
            if (info.position.lat) user.latitude = info.position.lat;
        }

        if (info.currentId) {
            user.currentId = info.currentId
        }

        user.save((err) => {
            if (err) {
                next('update err', null)
            } else {
                if (!info.coverUrl) user.coverUrl = undefined;
                if (!info.avatarUrl) user.avatarUrl = undefined;
                next('success', user)
            }
        })
    })
};

export const addBan = (userId, reason, next) => {
    getUser(userId, (user) => {
        if (user) {
            user.banned = 1;
            user.banReason = reason;
            user.save(() => {
                next();
            });
        }
    })
};

export const removeBan = (userId, reason, next) => {
    getUser(userId, (user) => {
        if (user) {
            user.banned = 0;
            user.save(() => {
                next();
            });
        }
    })
};

export const resetPassword = (email, next) => {
    getUserFromEmail(email, (user) => {
        if (user) {
            next(user);
            const password = generateRandomPassword();
            sendResetPasswordEmail(email, getPasswordToken(user._id, password), password, () => {});
        } else {
            next(null);
        }
    })
};

export const updatePasswordToken = (token, next) => {
    let decoded = verifyPasswordToken(token);
    if (!decoded) {
        next(null);
        return;
    }
    updatePassword(decoded._id, decoded.password, (user) => {
        next(user);
    })
};

export const updatePassword = (id, password, next) => {
    getUser(id, (user) => {
        if (user) {
            user.password = password;
            user.save(() => {
                next(user);
            })
        } else {
            next(null);
        }
    })
};