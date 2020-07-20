function authMiddleware(req, res, next){
    if (req.session.userLoggued != undefined){
        next()
    } else{
        res.render('solicitud_login')
    }
}

module.exports = authMiddleware