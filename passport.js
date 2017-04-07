
module.exports = function (app,Users){
    var passport = require('passport');
    var Strategy = require('passport-local').Strategy;

    passport.use(new Strategy(function(username, password, done) {
        console.log('Strategy 1',username,password)
        Users.findOne({ phone: username, password: password}, function (err, user) {
            console.log('Strategy 2',err,user)
            if (err) { return done(err); }
            console.log('Strategy 3',err,user)
            if (!user) { return done(null, false); }
            console.log('Strategy 4',err,user)
            return done(null, user);
        });
    }));

    passport.serializeUser(function(user, cb) {
        console.log('serializeUser',user)
        cb(null, user._id);
    });

    passport.deserializeUser(function(id, cb) {
        console.log('deserializeUser')
        Users.findOne({ _id : id }, function (err, user) {
            if (err) { return cb(err); }
            cb(null, user);
        });
    });

    app.use(require('cookie-parser')());
    app.use(require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    return passport
}
