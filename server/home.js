module.exports = function (app,ensureLogged){

    app.get("/",
        ensureLogged.ensureLoggedIn(),
        function (req,res){
            res.sendfile("view/home.html");
        })

    app.get("/logout",
        function (req,res) {
            console.log("logout")
            req.logout();
            req.session.destroy();
            res.redirect('/');
        }
    )

    app.get("/user",
        // ensureLogged.ensureLoggedIn(),
        function (req,res){
            console.log("GETUSER",req)
            res.send(req.user)
        }
    )
    return app;
}
