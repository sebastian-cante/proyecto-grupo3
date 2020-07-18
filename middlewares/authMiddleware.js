function authMiddleware(req, res, next){
    if (req.session.userLogued != undefined){
        next()
    } else{
        res.send('Solo pueden ingresar a esta página los usuarios logueados')
    }
}

module.exports = authMiddleware