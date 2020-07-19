function usernameMiddleware(req, res, next){
    if(req.session && typeof req.session.userLoggued !== undefined){
        res.locals.userData = req.session.userLoggued
    }
    next()
}

module.exports = usernameMiddleware