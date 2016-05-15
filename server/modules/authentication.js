function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.sendStatus(401);
}

var authentication = {
	isLoggedIn:isLoggedIn
}

module.exports=authentication;