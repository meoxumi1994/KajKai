var fs = require('fs');
var path = require('path');
var multer  = require('multer')

module.exports = function (app,passport,Users,dir,ensureLogged){

    app.get("/user",
        function (req,res){
            if(req.isAuthenticated()){
                var newdir = dir + '/public/data/' + req.user._id + '/avatar.jpg'
                res.send({
                    user : req.user,
                    isavatar : fs.existsSync(newdir)
                });
            }else{
                res.send(null);
            }
        })

    // app.post('/user/avatar', upload.single('avatar'), function (req, res, next) {
    //     console.log('avatar',req.file)
    // })

    app.post("/login",
        passport.authenticate('local'),function (req,res) {
            res.redirect('/')
        })

    app.post("/server/registeruser", function (req,res){
        var obj = req.body;
        console.log('/server/registeruser',req.body)
        Users.findOne({ 'phone' : obj.phone},function (err,user){
            if(err) return res.send('ERR')
            if(user){
                return res.send('CREATED')
            }else{
                new Users(obj).save(function (err,newuser){
                    if(err) return console.error(err);
                    var newdir = dir + '/public/data/' + newuser._id
                    if (!fs.existsSync(newdir)){
                        fs.mkdirSync(newdir);
                    }
                    return res.send('SUCCESS')
                })
            }
        })
    })



    return app
}
