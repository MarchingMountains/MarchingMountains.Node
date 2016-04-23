function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send(false);
}

var authentication = {
	isLoggedIn:isLoggedIn
}

module.exports=authentication;