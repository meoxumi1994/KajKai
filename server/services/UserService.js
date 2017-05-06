import { User } from '../models'
import jwt from 'jsonwebtoken'
import enums from '../enum'

module.exports = {
  getUserToken,
  getUser,
  getUserFromFacebookId,
  getUserFromGoogleId,
  getUserFromEmail,
  getUserFromPhone,
  verifyToken,
  saveNewUser,
  validateName,
  validateLanguage,
  validateSex
};

function getUser(id, next) {
	User.findById(id, function(err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromEmail(_email, next) {
	User.findOne({email: _email}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromPhone(_phone, next) {
	User.findOne({phone: _phone}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromFacebookId(facebookid, next) {
	User.findOne({socialNetworkType: enums.FACEBOOK, socialNetworkId: facebookid}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromGoogleId(googleid, next) {
	User.findOne({socialNetworkType: enums.GOOGLE, socialNetworkId: googleid}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserToken(id) {
	var token = jwt.sign({_id: id}, 'secret', { expiresIn: 60 * 60 });
	return token;
}

function verifyToken(token) {
	try {
		var decoded = jwt.verify(token, 'secret');
		return decoded;
	} catch(err) {
		return null;
	}
}

function saveNewUser(user, next) {
	user.save(function(err) {
		if (err) {
			next(null)
		} else {
			next(user._id)
		}
	})
}

function updateUserPhone(id, phone, next) {
	UserService.getUser(id, function(user){
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

function verifyCharacterVietname(username) {
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


function validateName(username) {
    const length = username.length;
    if (length >= 5 && length <= 45 && verifyCharacterVietname(username)) {
    	return true
    } else {
    	return false
    }
}

function validateLanguage(language){
	return (language == enums.Language.VIETNAM || language == enums.Language.ENGLISH)
}

function validateSex(sex) {
	return (sex == enums.Sex.MALE || sex == enums.Sex.FEMALE)
}

// function verifiedUser(email, connection, next) {
// 	connection.query('update user set verified = 1 where email = ' 
// 		+ "'" + email + "'", function(){
// 		next()
// 	})
// }


// function saveObjectToDB(user, connection, next) {
// 	var email = (user.email) ? "'" + user.email + "'" : 'null';
// 	var password = (user.password) ? "'" + user.password + "'" : 'null';
// 	var username = (user.username) ? "'" + user.username + "'" : 'null';
// 	var address = (user.address) ? "'" + user.address + "'" : 'null';
// 	var phone = (user.phone) ? "'" + user.phone + "'" : 'null';
// 	var facebookid = (user.facebookid) ? "'" + user.facebookid + "'" : 'null';
// 	var googleid = (user.googleid) ? "'" + user.googleid + "'" : 'null';
// 	var verified = (user.verified) ? user.verified : '';

// 	connection.query('insert into user (email, password, username, address, phone, facebookid, googleid) '
// 		+ 'values (' + email + ","
// 							+ password + ","
// 							+ username + ","
// 							+ address + ","
// 							+ phone + ","
// 							+ facebookid + ","
// 							+ googleid + ")", function(){
// 								next()
// 							});
// }

