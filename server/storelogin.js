/**
 * Created by meomeo on 3/5/17.
 */

module.exports = function (app,ensureLogged,Stores) {
    app.get("/storelogin",
        ensureLogged.ensureLoggedIn(),
        function (req,res){
            res.sendfile("view/storelogin.html")
        }
    )

    app.post("/register/store",
        ensureLogged.ensureLoggedIn(),
        function (req,res){
            var obj = {
                iduser: req.user._id,
                storename: req.body.storename,
                description: req.body.description,
                isship: req.body.isship,
                address: req.body.address,
                latitude: req.body.latitude,
                longtitude: req.body.longtitude
            };
            Stores.findOne({ 'iduser' : obj.iduser},function (err,user){
                if(user){
                    console.log('this store has been created');
                    return res.send({ status : 'this store has been created'})
                }else{
                    new Stores(obj).save(function (err){
                        if(err) return console.error(err);
                        console.log('  created store success!');
                        return res.send({ status : 'created user success!'})
                    })
                }
            })
        })

    return app
}
