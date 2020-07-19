function guestMiddleware(req, res, next){
    if (req.session.userLoggued == undefined){
        next()
    } else{
        res.send('Ya estás logueado, no puedes volver a loguearte.')
    }
}

module.exports = guestMiddleware