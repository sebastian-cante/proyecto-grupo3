function guestMiddleware(req, res, next){
    if (req.session.userLoggued == undefined){
        next()
    } else{
        res.render('usuario_logueado')
    }
}

module.exports = guestMiddleware