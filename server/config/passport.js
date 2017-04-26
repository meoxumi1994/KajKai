var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../services/UserService.js')
var connection = require('./mysqlDB.js');

const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// load up the user model
// var User       = require('../app/models/user');

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    
    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

    passport.use(new LocalStrategy({
        usernameField: 'loginID',
        passwordField: 'password',
        passReqToCallback: true,
        session: false
    },
        function(req, loginID, password, done) {

            console.log(loginID + ' ' + password);

            if (emailRegrex.test(loginID)) {

                User.getUserFromEmail(loginID, connection, function(user){
                    console.log(user);
                    if (user) {
                        req.token = User.getUserToken(loginID);
                    }
                    done(null, true);
                })
            } else {
                if (phoneRegrex.test(loginID)) {
                    User.getUserFromPhone(loginID, connection, function(user){
                        console.log(user);
                        if (user) {
                            req.token = User.getUserToken(loginID);
                        }
                        done(null, true);
                    })
                } else done(null, true)
            }


        }
    ));



    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : ['id', 'emails', 'name'],
        passReqToCallback: true
    },

    // facebook will send back the token and profile
    function(req, token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {
            // console.log(facebook.id);

            User.getUserFromFacebookId(profile.id, connection, function(user){
                
                if (user) {
                    console.log(user);
                    // done(null, user);
                    req.token = User.getUserToken(user.email);

                    done(null, true);
                } else {
                    // console.log(profile.emails[0].value);
                    // console.log(profile);
                    var newuser = new User.User(profile.emails[0].value, '1234', profile.name.givenName + ' ' + profile.name.familyName,
                        '', '', profile.id, null);

                    console.log(newuser);
                    User.saveObjectToDB(newuser, connection);
                    console.log(newuser.email);

                    req.token = User.getUserToken(newuser.email);

                    done(null, true);
                }
            })

        });

    }));

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================

    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
        passReqToCallback: true
    },
    function(req, token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // console.log(profile.id + ' ' + token + ' ' + profile.displayName + ' ' + profile.emails[0].value);
            // return done(null, profile.id);

            User.getUserFromGoogleId(profile.id, connection, function(user){
                if (user) {
                    console.log(user);
                    req.token = User.getUserToken(user.email);

                } else {
                    // console.log(profile.emails[0].value);
                    // console.log(profile);
                    var newuser = new User.User(profile.emails[0].value, '1234', profile.displayName,
                        '', '', null, profile.id);

                    console.log(newuser);
                    User.saveObjectToDB(newuser, connection);

                    req.token = User.getUserToken(newuser.email);
                }
                done(null, true);
            });

        });

    }));
};